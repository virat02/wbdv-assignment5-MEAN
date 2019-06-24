const mongoose = require('mongoose');

const websiteSchema = mongoose.Schema({
    title: String,
    author: String,
    pages: {type: mongoose.Schema.Types.Array, ref: 'PageModel'}
}, {collection: 'website'});

module.exports = websiteSchema;
