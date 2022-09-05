const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const router = require("./routes");

const app = express();
const port = 3000;

const { Client } = require("pg");
const client = new Client();

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
