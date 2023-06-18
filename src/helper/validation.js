function isValidUser(reg, res, next) {
  const { name, surname, email, pwd } = reg.body;

  if (!name) throw new Error("name не должно быть пустым");
  if (!surname) throw new Error("surname не должно быть пустым");
  if (!email) throw new Error("email не должно быть пустым");
  if (!pwd) throw new Error(" pwd не должно быть пустым");

  if(!isNaN(name)) throw new Error("имя не должно содержать числа");
  if(!isNaN(surname)) throw new Error("фамилия не должно содержать числа");
  if(pwd.length<9) throw new Error('пароль не должен быть меньше 8');

  if (!/^[a-z0-9\_\.\-]+@[a-z]+\.[a-z]{2,3}$/gm.test(email)) throw new Error("неверный формат email");

  next();
}

module.exports = { isValidUser };
