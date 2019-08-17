const express = require("express");
const server = express();

server.use(express.json());


server.get("/", (req, res) => {
  res.send("Database Homepage");
});

module.exports = server;