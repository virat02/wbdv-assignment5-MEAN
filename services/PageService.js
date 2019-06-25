const pageDao = require('../daos/PageDao');

const createPage = page =>
    pageDao.createPage(page);

const findPageById = (websiteId, pageId) =>
    pageDao.findPageById(websiteId, pageId);

const updatePage = (websiteId, pageId, page) =>
    pageDao.updatePage(websiteId, pageId, page);

const deletePage = (websiteId, pageId) =>
    pageDao.deletePage(websiteId, pageId);

module.exports = {
    createPage,
    findPageById,
    updatePage,
    deletePage
};
