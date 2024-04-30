const express = require("express");

const router = express.Router();

const authRoute = require("../controllers/authController");

router.post("/signup", authRoute.signup);
router.get("/login", authRoute.login);

module.exports = router;
