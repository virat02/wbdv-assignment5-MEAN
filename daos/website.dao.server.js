const websiteModel = require("../models/website.model.server");

findWebsiteById = websiteId =>
    websiteModel.findById(websiteId);

createWebsite = website =>
    websiteModel.create(website);

findAllWebsites = () =>
    websiteModel.find();

updateWebsite = (websiteId, website) =>
    websiteModel.update({_id: websiteId}, {$set: website});

deleteWebsite = websiteId =>
    websiteModel.remove({_id: websiteId});

module.exports = {
    findWebsiteById,
    createWebsite,
    findAllWebsites,
    updateWebsite,
    deleteWebsite
};