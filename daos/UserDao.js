const userModel = require("../models/UserModel");

const findUserById = userId =>
    userModel.findById(userId);

const findUserByCredentials = credentials =>
    userModel.findOne(credentials);

const findAllUsers = () =>
    userModel.find();

const createUser = user =>
    userModel.create(user);

const updateUser = (userId, user) =>
    userModel.update({_id: userId}, {$set: user});

const deleteUser = userId =>
    userModel.remove({_id: userId});

module.exports = {
    findUserById,
    findUserByCredentials,
    findAllUsers,
    createUser,
    updateUser,
    deleteUser
};
