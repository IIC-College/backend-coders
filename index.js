const express = require("express");
const cors = require("cors");
const router = require("./routes/route"); // Assuming your router file is named "router.js"
const db = require("./config/dbConfig");
require("dotenv").config();

const port = process.env.PORT || 8070;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(port, () => {
  console.log("Server is listening on http://localhost:" + port);
});
