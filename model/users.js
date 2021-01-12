const getAllUsers = ()  => {
    return [
        {
            email: 'aftab@mail.com',
            password: 'test'
        },
        {
            email: 'qasim@mail.com',
            password: 'test'
        },
        {
            email: 'naveed@mail.com',
            password: 'test'
        },
        {
            email: 'usman@mail.com',
            password: 'test'
        }
    ];
}

findUser = (email, password) => {
    let users = getAllUsers()
    let found = false;
    users.forEach((user) => {
        if((user.password === password) && (user.email === email)){
            found = true;
        }
    })
    return found;
}

module.exports = {
    getAllUsers,
    findUser
}