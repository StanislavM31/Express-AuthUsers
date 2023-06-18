const express = require("express");
const { createUser, autorization } = require("../service/user.service");
const {isValid} = require("../helper/validation")
const {buildResponse} = require("../helper/buildResponse")
const route = express.Router();

route.post("/reg", isValid, async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post("/auth", async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const data = await autorization(email, pwd);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});
module.exports = route;
