const userModel = require("../models/user.model.server");

findUserById = userId =>
    userModel.findById(userId);

findUserByCredentials = (username, password) =>
    userModel.findOne({username: username, password: password});

findAllUsers = () =>
    userModel.find();

createUser = user =>
    userModel.create(user);

updateUser = (userId, user) =>
    userModel.update({_id: userId}, {$set: user});

deleteUser = userId =>
    userModel.remove({_id: userId});

module.exports = {
    findUserById,
    findUserByCredentials,
    findAllUsers,
    createUser,
    updateUser,
    deleteUser
};
