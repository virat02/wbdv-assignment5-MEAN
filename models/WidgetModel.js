const mongoose = require('mongoose');
const WidgetSchema = require('../schemas/WidgetSchema');
const WidgetModel = mongoose.model('WidgetModel', WidgetSchema);

module.exports = WidgetModel;
