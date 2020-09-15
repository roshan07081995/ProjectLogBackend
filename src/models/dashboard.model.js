"user strict";
var dbConn = require("./../../config/db.config");

var ProjectTime = function (projectTime) {
  this.dateSelected = projectTime.dateSelected;
  this.timeLogged = projectTime.timeLogged;
  this.projectId = projectTime.projectId;
  this.employeeId = projectTime.employeeId;
};

Dashboard.findAll = function (result) {
  console.log("hi");
  // dbConn.query("Select * from logtime", function (err, res) {
  //   if (err) {
  //     console.log("error: ", err);
  //     result(null, err);
  //   } else {
  //     console.log("logtime : ", res);
  //     result(null, res);
  //   }
  // });
};

module.exports = ProjectTime;
