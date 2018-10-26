/**
 * Created by crosp on 5/9/17.
 */
const ValidationError = require(APP_ERROR_PATH + 'validation');
const NotFoundError = require(APP_ERROR_PATH + 'not-found');
const BaseAutoBindedClass = require(APP_BASE_PACKAGE_PATH + 'base-autobind');
var request = require('request');
var moment = require('moment');
var Rating = require('rating');
var url = require('url');
var _ = require('lodash');

const URLStore = global.config.variable.apiPath;
var urlArray = [];


class SdetailHandler extends BaseAutoBindedClass {
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

    getSingleStore(req, res) {

        var optionsBlog = {
            url: URLStore + '/stores/search?URL=' + req.params.url,
            method: 'GET',
            headers: {
                'Authorization': "maximumvsminimumsecurity",
                'Content-Type': "application/json"
            }
        };
        return new Promise(function(resolve, reject) {
            request(optionsBlog, function(error, response, body) {
                resolve(body)
            });
        }).then((results) => {
            var store = JSON.parse(results)['data'][0];
            if (store !== undefined) {
                var catBlogs = {
                    url: URLStore + '/stores/' + store._id,
                    method: 'GET',
                    headers: {
                        'Authorization': "maximumvsminimumsecurity",
                        'Content-Type': "application/json"
                    }
                };
                return new Promise(function(resolve, reject) {
                    request(catBlogs, function(error, response, body) {
                        resolve(body)
                    });
                }).then((storedata) => {

                    var storedatas = JSON.parse(storedata)['data'];
                    if (storedatas.storeCatalogs) {
                        var catkeyword = _.map(storedatas.categoriesIds, 'category');
                    }
                    var cat = '';

                    if (catkeyword.length > 1) {
                        cat = catkeyword[0] + ", " + catkeyword[1];
                    } else {
                        cat = catkeyword[0]
                    }

                    if (catkeyword == undefined || cat == undefined) {
                        cat = 'Clothing Home-Decor Accessories Jewellery';
                    }

                    var seoData = '';
                    if (storedatas.buisnessOffline || storedatas.buisnessBoth) {
                        seoData = {
                            title: storedatas.storeName + " For " + cat + " in " + storedatas.storeCity + ", " + storedatas.storeState + " | Zeepzoop",
                            description: "Check Designer " + cat + " By " + storedatas.storeName + " in " + storedatas.storeCity + ", " + storedatas.storeState + ".Visit Zeepzoop for " + storedatas.storeName + " address, contact number, reviews & catalogue",
                            keywords: storedatas.storeName + " in " + storedatas.storeCity + ", " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            url: req.protocol + '://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    } else if (storedatas.buisnessOnline) {
                        seoData = {
                            title: storedatas.storeName + " For " + cat + " Shop Online | Zeepzoop",
                            description: "Check Designer " + cat + " By " + storedatas.storeName + " .Visit " + storedatas.storeName + " Website from ZeepZoop for Online Shopping.",
                            keywords: storedatas.storeName + " in " + storedatas.storeCity + ", " + cat,
                            image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                            type: 'store',
                            url: req.protocol + '://' + req.get('host') + req.originalUrl,
                            site: 'Zeepzoop',
                            domain: 'zeepzoop.com'
                        }
                    }
                    console.log("req.connection---------")
                    console.log(req.connection.encrypted)
                    res.render('storedetail', {
                        seo: true,
                        seoData: seoData,
                        page: 'storedetail-page',
                        titleurl: req.params.url,
                        store: storedatas,
                        storeCatalogs: storedatas.storeCatalogs,
                        lengthstoreCatalogs: storedatas.storeCatalogs.length,
                        storeOffers: storedatas.storeOffers,
                        reviews: storedatas.reviews,
                        reviewslength: storedatas.reviews.length,
                        moment: moment,
                        lengthstoreOffers: storedatas.storeOffers.length,
                        shareUrl: req.protocol + '://' + req.get('host') + req.originalUrl
                    })
                });
            } else {
                res.render('404', { seo: false, title: '404 page not found', page: '404-page' })
            }
        })
    }
}

module.exports = SdetailHandler;