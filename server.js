const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const employeeRoutes = require("./src/routes/employee.routes");
const projectRoutes = require("./src/routes/project.routes");
const projectTImeRoutes = require("./src/routes/projecttime.routes");
//const dashboardRoutes = require("./src/routes/dashboard.routes");

app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/logtime", projectTImeRoutes);
//app.use("/api/v1/dashboard", dashboardRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
