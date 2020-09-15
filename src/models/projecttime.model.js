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
  dbConn.query(
    "Select *,l.id as mainId from logtime as l inner join employees as e on l.employeeId=e.id inner join projects as p on p.id=l.projectId ",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("logtime : ", res);
        //res.dateSelected = res.dateSelected.toLocaleString();
        result(null, res);
      }
    }
  );
};
ProjectTime.update = function (id, projectTime, result) {
  dbConn.query(
    "UPDATE logtime SET dateSelected=?,timeLogged=?,projectId=?,employeeId=? WHERE id = ?",
    [
      projectTime.dateSelected,
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

ProjectTime.findAllLogs = function (result) {
  dbConn.query(
    "Select *,sum(l.timeLogged) as time from employees as e inner join logtime as l on e.id=l.employeeId inner join projects as p on p.id = l.projectId group by l.employeeId",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("employees : ", res);
        result(null, res);
      }
    }
  );
};

ProjectTime.findByProjectName = function (id, result) {
  dbConn.query(
    "Select *,sum(l.timeLogged) as time from employees as e inner join logtime as l on e.id=l.employeeId inner join projects as p on p.id = l.projectId  where p.projectName like ? group by l.employeeId",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("employees : ", res);
        result(null, res);
      }
    }
  );
};

ProjectTime.findAllByEmployeeValue = function (id, result) {
  dbConn.query(
    "Select *,sum(l.timeLogged) as time from employees as e inner join logtime as l on e.id=l.employeeId inner join projects as p on p.id = l.projectId  where e.first_name like ? group by l.employeeId",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("employees : ", res);
        result(null, res);
      }
    }
  );
};

module.exports = ProjectTime;
