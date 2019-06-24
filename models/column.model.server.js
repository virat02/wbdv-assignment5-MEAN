const mongoose = require('mongoose');
const columnSchema = require('../schemas/column.schema.server');
const columnModel = mongoose.model('WidgetModel', columnSchema);

module.exports = columnModel;
