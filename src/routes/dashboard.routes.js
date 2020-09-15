const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

router.get("/", dashboardController.findAll);

// router.post("/", logtimeController.create);

// router.get("/:id", logtimeController.findById);

// router.put("/:id", logtimeController.update);

// router.delete("/:id", logtimeController.delete);

module.exports = router;
