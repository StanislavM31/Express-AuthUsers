const express = require('express');
const {createUser} = require('../service/user.service');
const route = express.Router();


route.post("/reg", async(req,res)=>{
    try {
        const{name,surname, email, pwd} = req.body;
        const data = await createUser(name,surname, email, pwd)
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

module.exports = route