const express = require("express");
const path = require("path");

  module.exports =  function (app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
      });
      
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/exercise.html"));
      });
      app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/stats.html"));
      });

  };