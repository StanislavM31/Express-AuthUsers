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
    return data;
}

async function autorization(email, password){
    const foundUser = await getUserByEmailDB(email);
    if(!foundUser.length) throw new Error('пользователя с таким email не найдено');

    const hashedPwd = foundUser[0].pwd;
    if(! (await bcrypt.compare(password, hashedPwd))) throw new Error("Введенный пароль не совпадает с паролем в БД")
    return foundUser;
}

module.exports = {createUser, autorization}