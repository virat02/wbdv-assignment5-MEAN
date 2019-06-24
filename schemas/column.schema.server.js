const mongoose = require('mongoose');

const columnSchema = mongoose.Schema({
    title: String,
    span: String,
    widgets: {type: mongoose.Schema.Types.Array, ref: 'WidgetModel'}
}, {collection: 'column'});

module.exports = columnSchema;
