const websiteModel = require("../models/website.model.server");

findPageById = (websiteId, pageId) =>
    websiteModel.findById(websiteId)
        .pages.findById(pageId);

createPage = (websiteId, page) =>
    websiteModel.findByIdAndUpdate(websiteId, {
        $push: { pages: page }
    });

updatePage = (websiteId, pageId, page) =>
    websiteModel.findById(websiteId)
        .pages.findByIdAndUpdate(pageId, {$set: page});


deletePage = (websiteId, pageId) =>
    websiteModel.findById(websiteId)
        .pages.remove({"_id": pageId});

module.exports = {
    findPageById,
    createPage,
    updatePage,
    deletePage
};