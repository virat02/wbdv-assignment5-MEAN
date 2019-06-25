const pageService = require('../services/PageService');

module.exports = app => {

    const createPage = (req, res) =>
        pageService.createPage(req.params['websiteId'], req.body)
            .then(response => res.json(response));

    const findPageById = (req, res) =>
        pageService.findPageById(req.params['websiteId'], req.params['pageId'])
            .then(response => res.json(response));

    const updatePage = (req, res) =>
        pageService.updatePage(req.params['websiteId'], req.params['pageId'], req.body)
            .then(response => res.json(response));

    const deleteWebsite = (req, res) => {
        pageService.deletePage(req.params['websiteId'], req.params['pageId']);
        return res.sendStatus(200);
    };


    app.put('/api/websites/:websiteId/pages/:pageId', updatePage);
    app.delete('/api/websites/:websiteId/pages/:pageId', deleteWebsite);
    app.get('/api/websites/:websiteId/pages/:pageId', findPageById);
    app.post('/api/websites/:websiteId/pages', createPage);
};