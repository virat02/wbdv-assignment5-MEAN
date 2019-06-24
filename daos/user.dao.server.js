const userModel = require("../models/user.model.server");

findUserById = userId =>
    userModel.findById(userId);

findUserByCredentials = (username, password) =>
    userModel.findOne({username: username, password: password});

createUser = user =>
    userModel.create(user);
    