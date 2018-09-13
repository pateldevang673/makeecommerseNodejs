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

        var q = url.parse(URLStore + '/stores/' + req.params.id, true);
        var optionsBlog = {
            url: URLStore + '/stores/' + req.params.id,
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
            var store = JSON.parse(results)['data'];
            if (store) {
                var seoData = {
                    title: store.storeName,
                    description: store.storeDiscription,
                    keywords: store.keyword,
                    image: global.config.variable.apiPath + '/' + store.storeLogo,
                    type: 'store',
                    url: req.protocol + '://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }

                res.render('storedetail', {
                    seo: true,
                    seoData: seoData,
                    page: 'storedetail-page',
                    titleurl: req.params.url,
                    store: store,
                    storeCatalogs: store.storeCatalogs,
                    lengthstoreCatalogs: store.storeCatalogs.length,
                    storeOffers: store.storeOffers,
                    reviews: store.reviews,
                    reviewslength: store.reviews.length,
                    moment: moment,
                    lengthstoreOffers: store.storeOffers.length,
                    shareUrl: req.protocol + '://' + req.get('host') + req.originalUrl
                })
            } else {
                res.render('404', { seo: false, title: '404 page not found', page: '404-page' })
            }

        })
    }
}

module.exports = SdetailHandler;