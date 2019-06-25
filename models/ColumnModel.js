const mongoose = require('mongoose');
const ColumnSchema = require('../schemas/ColumnSchema');
const ColumnModel = mongoose.model('ColumnModel', ColumnSchema);

module.exports = ColumnModel;
