const express = require("express");
// const ProjectRouter = require("./project-router");
const server = express();

server.use(express.json());
// server.use("/api/project", ProjectRouter);

server.get("/", (req, res) => {
  res.send("Database Homepage");
});

module.exports = server;