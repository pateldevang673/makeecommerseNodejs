/**
 * Created by crosp on 5/9/17.
 */
const ValidationError = require(APP_ERROR_PATH + 'validation');
const NotFoundError = require(APP_ERROR_PATH + 'not-found');
const BaseAutoBindedClass = require(APP_BASE_PACKAGE_PATH + 'base-autobind');
var request = require('request');
var url = require('url');

const URLStore = global.config.variable.apiPath;
var urlArray = [];

class CategoryHandler extends BaseAutoBindedClass {
    constructor() {
        super();
        this._validator = require('validator');
    }
    requestAsync(req, url, type) {
        return new Promise(function(resolve, reject) {
            var URLStore = url;
            var optionsStore = {
                url: URLStore,
                method: 'GET',
                headers: {
                    'Authorization': "maximumvsminimumsecurity",
                    'Content-Type': "application/json"
                }
            };
            request(optionsStore, type, function(error, response, body) {
                return resolve([type, JSON.parse(body)['data']]);
            });
        });
    }

    objectify(array) {
        return array.reduce(function(p, c) {
            console.log("objectify")
            console.log(p)
            console.log(c)
            p[c['fieldname']] = c;
            return p;
        }, {});
    }

    getcategegorystore(req, res) {

        var mainObj = {};
        if (req.query.buisnessOffline) {
            var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=' + req.params.id;
        } else if (req.query.buisnessOnline) {
            var urls = '/stores/search?trending=true&isActive=true&buisnessOnline=true&category=' + req.params.id;
        } else {
            var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=' + req.params.id;
        }
        Promise.all([
                this.requestAsync(req, URLStore + urls, 'categoryStore'),
                this.requestAsync(req, URLStore + "/categories/" + req.params.id, 'category')
            ])
            .then(function(allData) {
                return new Promise(function(resolve, reject) {
                    for (let i = 0; i < allData.length; i++) {
                        mainObj[allData[i][0]] = allData[i][1]
                    }
                    resolve(mainObj);
                });
            })
            .then((results) => {

                var seoData = {
                    title: 'Zeepzoop Collection',
                    description: 'Read Collection related to Art, Craft, culture, festivals, different cities, fashion, Home décor and much more. It guides you about what to buy from different cities.',
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: req.protocol + '://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }

                res.render('categorystore', {
                    seo: true,
                    seoData: seoData,
                    page: 'categorystore-page',
                    categoryStore: results['categoryStore'],
                    categoryStorelength: results['categoryStore'].length > 12 ? 12 : results['categoryStore'].length,
                    category: results['category'],
                    titleURL: urlArray
                })
            })



    }

    // getcategegorystore(req, res) {
    //     var mainObj = {};
    //     Promise.all([
    //             this.requestAsync(req, URLStore + '/collections/' + req.params.id, 'collectionStore'),
    //         ])
    //         .then(function(allData) {
    //             return new Promise(function(resolve, reject) {
    //                 for (let i = 0; i < allData.length; i++) {
    //                     mainObj[allData[i][0]] = allData[i][1].storeId
    //                 }
    //                 resolve(mainObj);
    //             });
    //         })
    //         .then((results) => {
    //             var seoData = {
    //                 title: 'Zeepzoop Collection',
    //                 description: 'Read Collection related to Art, Craft, culture, festivals, different cities, fashion, Home décor and much more. It guides you about what to buy from different cities.',
    //                 keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
    //                 image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
    //                 type: 'website',
    //                 url: req.protocol + '://' + req.get('host') + req.originalUrl,
    //                 site: 'Zeepzoop',
    //                 domain: 'zeepzoop.com'
    //             }

    //             res.render('categorystore', {
    //                 seo: true,
    //                 seoData: seoData,
    //                 page: 'categorystore-page',
    //                 collectionOnStore: results['collectionStore'],
    //                 collectionOnStorelength: results['collectionStore'].length,
    //                 titleURL: urlArray
    //             })
    //         })
    // }

}

module.exports = CategoryHandler;