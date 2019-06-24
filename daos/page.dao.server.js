const pageModel = require("../models/page.model.server");
const websiteModel = require("../models/website.model.server");

findPageById = (websiteId, pageId) =>
    websiteModel.findById(websiteId)
    pageModel.findById(pageId);

createPage = (websiteId, page) =>
    pageModel.create(page);

updatePage = (websiteId, pageId, page) =>


deletePage = (websiteId, pageId) =>

module.exports = {
    findPageById,
    createPage,
    updatePage,
    deletePage
};