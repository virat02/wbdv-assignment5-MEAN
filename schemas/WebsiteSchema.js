const mongoose = require('mongoose');
const PageSchema = require('./PageSchema');

const WebsiteSchema = mongoose.Schema({
    title: String,
    author: String,
    pages: [PageSchema]
}, {collection: 'websites'});

module.exports = WebsiteSchema;