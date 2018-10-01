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
        if (req.params.url == "5b97a34bad670834810a2c73") {
            res.redirect(301, '/collection/wedding-special')
        }
        if (req.params.url == "5b98ef6cc745cd5c18b700c5") {
            res.redirect(301, '/collection/mens-choice')
        }
        if (req.params.url == "5b990da562282263f3416da5") {
            res.redirect(301, '/collection/festive-vibes-ahmedabad')
        }
        if (req.params.url == "5b97a1b3ad670834810a2c69") {
            res.redirect(301, '/collection/designer-saree')
        }
        if (req.params.url == "5b98f063c745cd5c18b700ce") {
            res.redirect(301, '/collection/minimal-homes')
        }
        if (req.params.url == "5b98f4cbc745cd5c18b700dc") {
            res.redirect(301, '/collection/designer-saree-ahmedabad')
        }
        if (req.params.url == "5b98f337c745cd5c18b700d6") {
            res.redirect(301, '/collection/casually-classy-ahmedabad')
        }
        if (req.params.url == "5b97976d676fab31885d6b7f") {
            res.redirect(301, '/collection/casually-classy')
        }
        if (req.params.url == "5b98f5a7c745cd5c18b700e8") {
            res.redirect(301, '/collection/mens-choice-ahmedabad')
        }
        if (req.params.url == "5b98eab9c745cd5c18b700bc") {
            res.redirect(301, '/collection/festive-vibes')
        }
        if (req.params.url == "5b98f530c745cd5c18b700e2") {
            res.redirect(301, '/collection/wedding-special-ahmedabad')
        }
        if (req.params.url == "5b98f660c745cd5c18b700ee") {
            res.redirect(301, '/collection/minimal-homes-ahmedabad')
        }
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

                if (results['collectionStore'].length > 0) {
                    res.render('collection', {
                        seo: true,
                        seoData: seoData,
                        page: 'collection-page',
                        collectiondata: results['collectionStore'][0],
                        collectionOnStore: results['collectionStore'][0].storeId,
                        collectionOnStorelength: results['collectionStore'][0].storeId.length,
                        host: req.get('host'),
                        titleURL: urlArray
                    })
                }
            })
    }
}

module.exports = CollectionHandler;