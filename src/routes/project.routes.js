const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project.controller");

router.get("/", projectController.findAll);

router.post("/", projectController.create);

router.get("/:id", projectController.findById);

router.put("/:id", projectController.update);

router.delete("/:id", projectController.delete);

module.exports = router;
