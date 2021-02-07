const express = require("express");
const { Workout } = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });
  app.post("/api/workouts", (req, res) => {
    Workout.create({ req.body })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });
  
};
