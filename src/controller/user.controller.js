const express = require("express");
const { createUser, autorization } = require("../service/user.service");
const route = express.Router();

route.post("/reg", async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

route.post("/auth", async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const data = await autorization(email, pwd);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});
module.exports = route;
