"use strict";
var dbConn = require("./../../config/db.config");

const ProjectTime = require("../models/projecttime.model");

exports.findAll = function (req, res) {
  ProjectTime.findAllLogs(function (err, employee) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", employee);
    res.send(employee);
  });
};
exports.findAllByValue = function (req, res) {
  ProjectTime.findByProjectName(req.params.id, function (err, employee) {
    if (err) res.send(err);
    res.json(employee);
  });
};
exports.findAllByEmployeeValue = function (req, res) {
  ProjectTime.findAllByEmployeeValue(req.params.id, function (err, employee) {
    if (err) res.send(err);
    res.json(employee);
  });
};
