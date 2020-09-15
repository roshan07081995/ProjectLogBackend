"user strict";
var dbConn = require("./../../config/db.config");

var ProjectTime = function (projectTime) {
  this.dateSelected = projectTime.dateSelected;
  this.timeLogged = projectTime.timeLogged;
  this.projectId = projectTime.projectId;
  this.employeeId = projectTime.employeeId;
};
ProjectTime.create = function (newProjectTime, result) {
  dbConn.query("INSERT INTO logtime set ?", newProjectTime, function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
ProjectTime.findById = function (id, result) {
  dbConn.query("Select * from logtime where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
ProjectTime.findAll = function (result) {
  dbConn.query("Select * from logtime", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("logtime : ", res);
      result(null, res);
    }
  });
};
ProjectTime.update = function (id, projectTime, result) {
  dbConn.query(
    "UPDATE logtime SET dateSelected=?,timeLogged=?,projectId=?,employeeId=? WHERE id = ?",
    [
      projectTime.dateSeleted,
      projectTime.timeLogged,
      projectTime.projectId,
      projectTime.employeeId,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
ProjectTime.delete = function (id, result) {
  dbConn.query("DELETE FROM logtime WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = ProjectTime;
