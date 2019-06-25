module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboard';
    let connectionString = 'mongodb://localhost/';
    mongoose.connect(connectionString+databaseName);
};
