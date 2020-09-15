const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");

router.get("/list", dashboardController.findAll);
router.get("/projectdata/:id", dashboardController.findAllByValue);
router.get("/employeedata/:id", dashboardController.findAllByEmployeeValue);

module.exports = router;
