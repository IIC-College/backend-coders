const { Client } = require("pg");

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "coders_community",
  password: "12345",
  port: 5432,
});

db.connect((error) => {
  if (error) {
    console.error("Error connecting to database:", error);
  } else {
    console.log("Database connected successfully!!");
  }
});

module.exports = db;
