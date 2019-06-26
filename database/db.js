module.exports = function () {
    const mongoose = require('mongoose');
    // const databaseName = 'whiteboard';
    // let connectionString = 'mongodb://localhost/';
    let connectionString = 'mongodb://heroku_v9k8xd6d:h9aac1d0b1l0rsnfhq44vlj8nr@ds243607.mlab.com:43607/heroku_v9k8xd6d';
    mongoose.connect(connectionString, {useNewUrlParser: true});
};
