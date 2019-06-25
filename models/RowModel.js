const mongoose = require('mongoose');
const RowSchema = require('../schemas/RowSchema');
const RowModel = mongoose.model('RowModel', RowSchema);

module.exports = RowModel;
