const express = require("express");
const router = express.Router();
const logtimeController = require("../controllers/projecttime.controller");

router.get("/", logtimeController.findAll);

router.post("/", logtimeController.create);

router.get("/:id", logtimeController.findById);

router.put("/:id", logtimeController.update);

router.delete("/:id", logtimeController.delete);

module.exports = router;
