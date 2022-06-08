const express = require("express");
const notes = require("./data/notes");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.get("/", function (req, res) {
  res.send("API is Running......");
});
app.get("/api/notes/:id", function (req, res) {
  const note = notes.find((n) => n._id === req.params.id);
  console.log(req.params);
  res.send(note);
  // res.json(notes);
});
app.get("/api/notes", function (req, res) {
  res.json(notes);
});
const port = process.env.PORT;
app.listen(3000, console.log(`Server Started on port ${port}`));
