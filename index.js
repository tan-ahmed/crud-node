const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const router = require("./routes");

const app = express();
const port = 3000;

const { Client } = require("pg");
const client = new Client();
// client.connect();
// client.query("SELECT $1::text as message", ["Hello world!"], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message); // Hello World!
//   client.end();
// });

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await db.sequelize.sync();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error(error, "not connecting to server");
  }
})();
