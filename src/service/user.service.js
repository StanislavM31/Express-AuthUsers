const {createUserDB, getUserByEmailDB} = require("../repository/user.repository");
const bcrypt = require('bcrypt');

async function createUser(name, surname, email, pwd){
    const foundUser = await getUserByEmailDB(email);
    if(foundUser.length) throw new Error('такой email уже зарегистрирован');
    const hashedPwd = await hashFunction(pwd);
    const data = await createUserDB(name, surname, email, hashedPwd);
    return data;
}

async function hashFunction(password){
    const saltround = 2;
    const data = bcrypt.hash(password, saltround);
    console.log(data);
    return data;
}

module.exports = {createUser}