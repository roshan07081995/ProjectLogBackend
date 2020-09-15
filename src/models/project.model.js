"user strict";
var dbConn = require("./../../config/db.config");

var Project = function (project) {
  this.projectName = project.projectName;
  this.projectDescription = project.projectDescription;
  this.totalEstimate = project.totalEstimate;
  this.created_at = new Date();
};
Project.create = function (newPro, result) {
  dbConn.query("INSERT INTO projects set ?", newPro, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Project.findById = function (id, result) {
  dbConn.query("Select * from projects where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Project.findAll = function (result) {
  dbConn.query("Select * from projects", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("projects : ", res);
      result(null, res);
    }
  });
};
Project.update = function (id, project, result) {
  dbConn.query(
    "UPDATE projects SET projectName=?,projectDescription=?,totalEstimate=? WHERE id = ?",
    [
      project.projectName,
      project.projectDescription,
      project.totalEstimate,
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
Project.delete = function (id, result) {
  dbConn.query("DELETE FROM projects WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Project;
