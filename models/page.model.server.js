const mongoose = require('mongoose');
const pageSchema = require('../schemas/page.schema.server');
const pageModel = mongoose.model('PageModel', pageSchema);

module.exports = pageModel;
