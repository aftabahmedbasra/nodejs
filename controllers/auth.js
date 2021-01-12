
    const usersModel = require('../model/users');

const register = (req, res) => {
    console.log(res.body);
}
const login = (req, res) => {
    const { email, password} = req.body;
    let errors = [];


    if ( !email || !password) {
        errors.push({ msg: 'Please enter all fields' });
    }else if(!usersModel.findUser(email, password)){
        errors.push({ msg: 'User not found, please try with another email' });
    }

    if (errors.length > 0) {
        res.render('default/login', {
            'errors': errors,
            'email': email,
            'password': password,
        });
    }

    if(!errors.length){
        res.redirect('/');
    }
    
}

module.exports = {
    register, 
    login
}