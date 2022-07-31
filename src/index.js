const express = require("express");
require("./db/mongoose");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/users", (req, res) => {
  const user = new User({
    name: "Haroon",
    email: "haroon@gmail.com",
    password: "123456",
    age: 23,
  });
  console.log("test");

  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
