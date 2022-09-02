const Sequelize = require("sequelize");

const sequelize = new Sequelize("spareroom", "tanahmed", "5432", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// const { Client } = require("pg");

// const client = new Client({
//   user: "tanahmed",
//   password: "5432",
//   host: "localhost",
//   database: "postgres",
// });

// client.connect();

// client.query('CREATE DATABASE "spareroom"', (err, res) => {
//   console.log(err, res);
//   client.end();
// });
