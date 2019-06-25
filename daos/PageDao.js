const websiteModel = require("../models/WebsiteModel");
const pageModel = require("../models/PageModel");

const findPageById = (websiteId, pageId) =>
    websiteModel.findById(websiteId)
        .then(website => website.pages.id(pageId));

const createPage = (websiteId, page) =>
    websiteModel.findByIdAndUpdate(websiteId, {
        $push: { pages: page }
    });

const updatePage = (websiteId, pageId, page) =>
    websiteModel
        .update(
            {
                _id: websiteId,
                'pages._id': pageId
            },
            {
                $set: {
                    'pages.$.title': page.title,
                    'pages.$.rows': page.rows
                }
            }
        );


const deletePage = (websiteId, pageId) => {
    websiteModel.findById(websiteId)
        .then(website => website.pages.remove({_id: pageId}));


    pageModel.remove({_id: pageId});
};


module.exports = {
    findPageById,
    createPage,
    updatePage,
    deletePage
};
