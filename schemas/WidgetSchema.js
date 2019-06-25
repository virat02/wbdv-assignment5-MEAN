const mongoose = require('mongoose');

const WidgetSchema = mongoose.Schema({
    title: String,
    type: {
        type: String,
        enum: [
            'HEADING', 'PARAGRAPH', 'HTML', 'YOUTUBE', 'WIDGET'
        ]
    },
    text: String,
    size: Number
}, {collection: 'widget'});

module.exports = WidgetSchema;
