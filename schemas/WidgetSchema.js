const mongoose = require('mongoose');

const WidgetSchema = mongoose.Schema({
    title: String,
    type: String,
    text: String,
    size: Number
}, {collection: 'widget'});

module.exports = WidgetSchema;
