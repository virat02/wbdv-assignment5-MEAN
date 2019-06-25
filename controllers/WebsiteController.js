const websiteService = require('../services/WebsiteService');

module.exports = app => {

    const createWebsite = (req, res) =>
        websiteService.createWebsite(req.body)
            .then(response => res.json(response));

    const findWebsiteById = (req, res) =>
        websiteService.findWebsiteById(req.params['websiteId'])
            .then(response => res.json(response));

    const updateWebsite = (req, res) =>
        websiteService.updateWebsite(req.params['websiteId'], req.body())
            .then(response => res.json(response));

    const deleteWebsite = (req, res) =>
        websiteService.deleteWebsite(req.params['websiteId'])
            .then(response => res.json(response));

    const findAllWebsites = (req, res) =>
        websiteService.findAllWebsites()
            .then(response => res.json(response));

    app.put('/api/websites/:websiteId', updateWebsite);
    app.delete('/api/websites/:websiteId', deleteWebsite);
    app.get('/api/websites/:websiteId', findWebsiteById);
    app.get(' /api/websites', findAllWebsites);
    app.post('/api/websites', createWebsite);
};