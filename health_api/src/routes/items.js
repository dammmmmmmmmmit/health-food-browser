const express = require("express");
const router = express.Router();

const controller = require("../controllers/itemsController");

router.get("/", controller.getItems);

router.get("/items/:id", controller.getItemById);

module.exports = router;
