const {createUserDB, getUserByEmailDB} = require("../repository/user.repository");

async function createUser(name, surname, email, pwd){
    const foundUser = await getUserByEmailDB(email);
    if(foundUser.length) throw new Error('такой email уже зарегистрирован');
    const data = await createUserDB(name, surname, email, pwd);
    return data;
}

module.exports = {createUser}