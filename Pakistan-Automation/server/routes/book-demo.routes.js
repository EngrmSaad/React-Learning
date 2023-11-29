const express = require("express");
const bookDemoController = require("../controllers/book-demo.controller");
const router = express.Router();

router.post("/insert",  bookDemoController.insertBookDemo);

module.exports = router;
