const mongoose = require('mongoose');
const WidgetSchema = require('./WidgetSchema');

const ColumnSchema = mongoose.Schema({
    title: String,
    span: String,
    widgets: [WidgetSchema]
});

module.exports = ColumnSchema;