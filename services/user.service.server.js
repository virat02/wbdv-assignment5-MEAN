const userDao = require('../daos/user.dao.server');

module.exports = app => {
    let createUser = (req, res) =>
        userDao.createUser(req.body)
            .then(user => res.json(user));

    let findUserById = (req, res) =>
        userDao.findUserById(req.params.id)
            .then(user => res.json(user));

    let findAllUsers = (req, res) => {
        userDao.findAllUsers()
            .then(users => res.json(users))
    };

    let updateUser = (req, res) =>
        userDao.updateUser(req.params.id, req.body)
            .then(user => res.json(user));

    let deleteUser = (req, res) =>
        userDao.deleteUser(req.params.id)
            .then(user => res.json(user));

    app.put('/api/user/:userId', updateUser);
    app.delete('/api/user/:userId', deleteUser);
    app.get('/api/user/:userId', findUserById);
    app.get('/api/user', findAllUsers);
    app.post('/api/user', createUser);
};
