const mongoose = require('mongoose');
const WebsiteSchema = require('../schemas/WebsiteSchema');
const WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

module.exports = WebsiteModel;
