const mongoose = require('mongoose');
const PageSchema = require('../schemas/PageSchema');
const PageModel = mongoose.model('PageModel', PageSchema);

module.exports = PageModel;
