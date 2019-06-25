const pageDao = require('../daos/PageDao');

const createPage = (websiteId, page) =>
    pageDao.createPage(websiteId, page);

const findPageById = (websiteId, pageId) =>
    pageDao.findPageById(websiteId, pageId);

const updatePage = (websiteId, pageId, page) =>
    pageDao.updatePage(websiteId, pageId, page);

const deletePage = (websiteId, pageId) =>
    pageDao.deletePage(websiteId, pageId);

const findAllPages = websiteId =>
    pageDao.findAllPages(websiteId);

module.exports = {
    createPage,
    findPageById,
    updatePage,
    deletePage,
    findAllPages
};
