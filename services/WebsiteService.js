const websiteDao = require('../daos/WebsiteDao');

const createWebsite = website =>
    websiteDao.createWebsite(website);

const findWebsiteById = websiteId =>
    websiteDao.findWebsiteById(websiteId);

const updateWebsite = (websiteId, website) =>
    websiteDao.updateWebsite(websiteId, website);

const deleteWebsite = websiteId =>
    websiteDao.deleteWebsite(websiteId);

const findAllWebsites = () =>
    websiteDao.findAllWebsites();

module.exports = {
    createWebsite,
    findWebsiteById,
    updateWebsite,
    deleteWebsite,
    findAllWebsites
};
