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
    Workout.create({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });
  app.put("/api/workout/:id", (req, res) => {
    Workout.findOneAndUpdate({ id })
      .then((data) => {
        res.json(data);
        console.log("🚀 ~ file: api-routes.js ~ line 29 ~ .then ~ data", data)
      })
      .catch((err) => {
        console.log(err);
        res.json(404);
      });
  });
};
