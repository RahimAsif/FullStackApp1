// Dependencies
const express = require("express");
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Home page
app.get("/", (req, res) => {
  res.send("Backend HomePage");
});

// Users route
app.get("/users", (req, res) => {
  let users = [
    { id: 1, name: "Tanim" },
    { id: 2, name: "Eshita" },
    { id: 3, name: "Ayana" },
  ];
  res.status(200).send(users);
});

// Comments route
app.get("/comments", (req, res) => {
  let comments = [
    { id: 1, userid: 2, comment: "You did a great job" },
    { id: 2, userid: 1, comment: "Next time try harder - OK!" },
    {
      id: 3,
      userid: 1,
      comment: "The quick brown fox jumped over the lazy dog!",
    },
    {
      id: 4,
      userid: 1,
      comment: "And we all wondered why it did such a stupid thing",
    },
  ];
  res.status(200).send(comments);
});

// Listen
app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Backend Server running on Port: ${process.env.BACKEND_PORT}`);
});
