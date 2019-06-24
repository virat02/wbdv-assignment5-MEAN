const mongoose = require('mongoose');

const columnSchema = mongoose.Schema({
    title: String,
    columns: {type: mongoose.Schema.Types.Array, ref: 'ColumnModel'}
}, {collection: 'page'});

module.exports = columnSchema;
