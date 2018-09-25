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

class CollectionHandler extends BaseAutoBindedClass {
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

    // getcategegorystore(req, res) {

    //     console.log("req.params================")
    //     console.log(req.params)

    //     var mainObj = {};
    //     Promise.all([
    //             // this.requestAsync(req, URLStore + '/collections/' + req.params.id, 'collectionStore'),
    //             // this.requestAsync(req, URLStore + '/collections/5a51e507ff645771bf57dc14', 'collectionStore'),
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


    getBlogs(req, res) {
        var mainObj = {};
        Promise.all([
                this.requestAsync(req, URLStore + '/collections/search?collectionURL=' + req.params.url, 'collectionStore'),
            ])
            .then(function(allData) {
                return new Promise(function(resolve, reject) {
                    for (let i = 0; i < allData.length; i++) {
                        mainObj[allData[i][0]] = allData[i][1];
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

                res.render('collection', {
                    seo: true,
                    seoData: seoData,
                    page: 'collection-page',
                    collectiondata: results['collectionStore'][0],
                    collectionOnStore: results['collectionStore'][0].storeId,
                    collectionOnStorelength: results['collectionStore'][0].storeId.length,
                    titleURL: urlArray
                })
            })
    }

}

module.exports = CollectionHandler;