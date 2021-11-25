const getCatalogue = (request, response) => {
    const catalogueServices = require('../services/productServices');
    catalogueServices.searchService(function(err, rows) {
        response.render('catalogue', { products: rows });
    });
};

const getProductByID = (request, response) => {
    const catalogueServices = require('../services/productServices');
    let reference = request.params.id;
    catalogueServices.searchIDService(reference, function(err, rows) {
        response.render('article', {products : rows});
    });
};

const getProductsByCategory = (request, response) => {
    const catalogueServices = require('../services/productServices');
    let reference = request.params.category;
    catalogueServices.searchCategoryService(category, function(err, rows) {
        response.render('article', {products : rows});   
    });
};

module.exports = {
    getCatalogue,
    getProductByID,
    getProductsByCategory
};