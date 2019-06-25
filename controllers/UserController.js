const userService = require('../services/UserService');

module.exports = app => {

    const register = (req, res) =>
        userService.createUser(req.body)
            .then(response => res.json(response));

    const findUserById = (req, res) =>
        userService.findUserById(req.params['id'])
            .then(response => res.json(response));

    const login = (req, res) =>
        userService.findUserByCredentials(req.body.username, req.body.password)
            .then(response => res.json(response));

    const updateProfile = (req, res) =>
        userService.updateUser(req.params['id'], req.body())
            .then(response => res.json(response));

    const deleteUser = (req, res) =>
        userService.deleteUser(req.params['id'])
            .then(response => res.json(response));

    const findAllUsers = (req, res) =>
        userService.findAllUsers()
            .then(response => res.json(response));

    app.put('/api/profile/:id', updateProfile);
    app.delete('/api/profile/:id', deleteUser);
    app.get('/api/profile/:id', findUserById);
    app.get('/api/profile', findAllUsers);
    app.post('/api/register', register);
    app.post('api/login', login);
};
