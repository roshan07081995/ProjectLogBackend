"use strict";

const projectTime = require("../models/projecttime.model");

exports.findAll = function (req, res) {
  projectTime.findAll(function (err, logtime) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", logtime);
    res.send(logtime);
  });
};

exports.create = function (req, res) {
  const new_project_time = new projectTime(req.body);

  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    projectTime.create(new_project_time, function (err, projectTime) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Project Time added successfully!",
        data: projectTime,
      });
    });
  }
};

exports.findById = function (req, res) {
  projectTime.findById(req.params.id, function (err, projectTime) {
    if (err) res.send(err);
    res.json(projectTime);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    projectTime.update(req.params.id, new projectTime(req.body), function (
      err,
      projectTime
    ) {
      if (err) res.send(err);
      res.json({ error: false, message: "Project Time successfully updated" });
    });
  }
};

exports.delete = function (req, res) {
  projectTime.delete(req.params.id, function (err, projectTime) {
    if (err) res.send(err);
    res.json({ error: false, message: "Log successfully deleted" });
  });
};
