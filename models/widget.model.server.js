const mongoose = require('mongoose');
const widgetSchema = require('../schemas/widget.schema.server');
const widgetModel = mongoose.model('WidgetModel', widgetSchema);

module.exports = widgetModel;
