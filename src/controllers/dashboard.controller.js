"use strict";
var dbConn = require("./../../config/db.config");

const Employee = require("../models/employee.model");
const Project = require("../models/project.model");
const ProjectTime = require("../models/projecttime.model");
//const Dashboard = require("../models/dashboard.model");

exports.findAll = function (req, res) {
  dbConn.query("Select * from projects", function (err, res) {
    if (err) {
      console.log("error: ", err);
    } else {
      console.log("projects : ", res);
      // res.send();
    }
  });
  // Dashboard.findAll(function (err, employee) {
  //   console.log("controller");
  //   if (err) res.send(err);
  //   console.log("res", employee);
  //   res.send(employee);
  // });
};

// exports.findById = function (req, res) {
//   Employee.findById(req.params.id, function (err, employee) {
//     if (err) res.send(err);
//     res.json(employee);
//   });
// };
