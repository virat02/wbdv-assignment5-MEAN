const userDao = require('../daos/UserDao');

const createUser = user=>
    userDao.createUser(user);

const findUserById = userId =>
    userDao.findUserById(userId);

const findUserByCredentials = credentials =>
    userDao.findUserByCredentials(credentials);

const findAllUsers = () =>
    userDao.findAllUsers();

const updateUser = (userId, user) =>
    userDao.updateUser(userId, user);

const deleteUser = userId =>
    userDao.deleteUser(userId);

module.exports = {
    createUser,
    findUserById,
    findUserByCredentials,
    findAllUsers,
    updateUser,
    deleteUser
};
