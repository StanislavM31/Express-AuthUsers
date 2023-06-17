function isValid(req, res, next){
    const{name, surname, email, pwd} = req.body;

    if(!name || !name.length) throw new Error('name не должно быть пустым')
    if(!surname) throw new Error('surname не должно быть пустым')
    if(!email) throw new Error('email не должно быть пустым')
    if(!pwd) throw new Error(' pwd не должно быть пустым')

    if(!/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/gm.test(email)) throw new Error('неверный формат email');

    next();
}

module.exports = {isValid}