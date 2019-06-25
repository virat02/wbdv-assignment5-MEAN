const mongoose = require('mongoose');
const RowSchema = require('./RowSchema');

const PageSchema = mongoose.Schema({
    title: String,
    websiteId: String,
    rows: [RowSchema]
});

module.exports = PageSchema;
