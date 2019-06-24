const mongoose = require('mongoose');

const widgetSchema = mongoose.Schema({
    title: String,
    type: String,
    text: String,
    size: Number
}, {collection: 'widget'});

module.exports = widgetSchema;
