const mongoose = require('mongoose');
const websiteSchema = require('../schemas/website.schema.server');
const websiteModel = mongoose.model('WebsiteModel', websiteSchema);

module.exports = websiteModel;
