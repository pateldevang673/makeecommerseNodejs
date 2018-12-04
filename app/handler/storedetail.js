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

        if (req.params.url == "CINNAMON") {
            res.redirect(301, '/brand/Cinnamon');
        }
        if (req.params.url == "ANQI") {
            res.redirect(301, '/brand/Anqi');
        }
        if (req.params.url == "RITUJAINSINGH") {
            res.redirect(301, '/brand/Ritu-jain-singh');
        }
        if (req.params.url == "FOURSEVEN") {
            res.redirect(301, '/brand/Fourseven');
        }
        if (req.params.url == "ANAVILA") {
            res.redirect(301, '/brand/Anavila');
        }
        if (req.params.url == "HANGAR") {
            res.redirect(301, '/brand/Hangar');
        }
        if (req.params.url == "ZAHRAS") {
            res.redirect(301, '/brand/Zahras');
        }
        if (req.params.url == "NEEDLEDUST") {
            res.redirect(301, '/brand/Needledust');
        }
        if (req.params.url == "ADYA") {
            res.redirect(301, '/brand/Adya');
        }
        if (req.params.url == "BIAS") {
            res.redirect(301, '/brand/Bias');
        }
        if (req.params.url == "IMAGES") {
            res.redirect(301, '/brand/Images');
        }
        if (req.params.url == "DHORA") {
            res.redirect(301, '/brand/Dhora');
        }
        if (req.params.url == "RANJNA") {
            res.redirect(301, '/brand/Ranjna');
        }
        if (req.params.url == "SKO") {
            res.redirect(301, '/brand/Sko');
        }
        if (req.params.url == "IZA") {
            res.redirect(301, '/brand/Iza');
        }
        if (req.params.url == "PILGRIM") {
            res.redirect(301, '/brand/Pilgrim');
        }
        if (req.params.url == "ALMIRAH") {
            res.redirect(301, '/brand/Almirah');
        }
        if (req.params.url == "RASA") {
            res.redirect(301, '/brand/Rasa');
        }
        if (req.params.url == "ISHARYA") {
            res.redirect(301, '/brand/Isharya');
        }
        if (req.params.url == "OUTHOUSE") {
            res.redirect(301, '/brand/Outhouse');
        }
        if (req.params.url == "KNYA") {
            res.redirect(301, '/brand/Knya');
        }
        if (req.params.url == "SVA") {
            res.redirect(301, '/brand/Sva');
        }
        if (req.params.url == "FATIZ") {
            res.redirect(301, '/brand/Fatiz');
        }
        if (req.params.url == "SHILPI") {
            res.redirect(301, '/brand/Shilpi');
        }
        if (req.params.url == "GUAPA") {
            res.redirect(301, '/brand/Guapa');
        }
        if (req.params.url == "REHANE") {
            res.redirect(301, '/brand/Rehane');
        }
        if (req.params.url == "THREE") {
            res.redirect(301, '/brand/Three');
        }
        if (req.params.url == "TIFARA") {
            res.redirect(301, '/brand/Tifara');
        }
        if (req.params.url == "ORRA") {
            res.redirect(301, '/brand/Orra');
        }
        if (req.params.url == "INTISH") {
            res.redirect(301, '/brand/Intish');
        }
        if (req.params.url == "STUDIO-149") {
            res.redirect(301, '/brand/Studio-149');
        }
        if (req.params.url == "STUDIO-9696") {
            res.redirect(301, '/brand/Studio-9696');
        }
        if (req.params.url == "DHORA") {
            res.redirect(301, '/brand/Dhora');
        }
        if (req.params.url == "Kalki-by-K.") {
            res.redirect(301, '/brand/Kalki-by-k');
        }
        if (req.params.url == "BODICE") {
            res.redirect(301, '/brand/Bodice');
        }
        if (req.params.url == "Asopalav") {
            res.redirect(301, '/brand/asopalav');
        }
        if (req.params.url == "Scarters") {
            res.redirect(301, '/brand/scarters');
        }
        if (req.params.url == "Sko") {
            res.redirect(301, '/brand/sko');
        }
        if (req.params.url == "Nakhrewaali") {
            res.redirect(301, '/brand/nakhrewaali');
        }
        if (req.params.url == "The-Linen-Way") {
            res.redirect(301, '/brand/the-linen-way');
        }
        if (req.params.url == "Hyperbole-Accessories") {
            res.redirect(301, '/brand/hyperbole-accessories');
        }
        if (req.params.url == "Fancy-Pastels") {
            res.redirect(301, '/brand/fancy-pastels');
        }
        if (req.params.url == "Mati-India") {
            res.redirect(301, '/brand/mati-india');
        }
        if (req.params.url == "Studio-Scarlet") {
            res.redirect(301, '/brand/studio-scarlet');
        }
        if (req.params.url == "Mesmora") {
            res.redirect(301, '/brand/mesmora');
        }
        if (req.params.url == "Madison") {
            res.redirect(301, '/brand/madison');
        }
        if (req.params.url == "Mahitha-Prasad") {
            res.redirect(301, '/brand/mahitha-prasad');
        }
        if (req.params.url == "Arsheen-Sabherwal") {
            res.redirect(301, '/brand/arsheen-sabherwal');
        }
        if (req.params.url == "Vedangi-Agarwal-Couture") {
            res.redirect(301, '/brand/vedangi-agarwal-couture');
        }
        if (req.params.url == "Design-Temple") {
            res.redirect(301, '/brand/design-temple');
        }
        if (req.params.url == "Satya-Paul") {
            res.redirect(301, '/brand/satya-paul');
        }
        if (req.params.url == "R-Clothing-by-Reepal-Rao") {
            res.redirect(301, '/brand/r-clothing-by-reepal-rao');
        }
        if (req.params.url == "Aamod") {
            res.redirect(301, '/brand/aamod');
        }
        if (req.params.url == "Jharonka") {
            res.redirect(301, '/brand/jharonka');
        }
        if (req.params.url == "Praan:t-A-label-by-Monika-Chordia") {
            res.redirect(301, '/brand/praan:t-a-label-by-monika-chordia');
        }

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
                    // if (storedatas.buisnessOffline || storedatas.buisnessBoth) {
                    //     seoData = {
                    //         title: "Designer " + cat + " By " + storedatas.storeName + " in " + storedatas.storeCity + ", India",
                    //         // title: storedatas.storeName + " For " + cat + " in " + storedatas.storeCity + ", " + storedatas.storeState + " | Zeepzoop",
                    //         description: "Check Designer " + cat + " By " + storedatas.storeName + " in " + storedatas.storeCity + ", " + storedatas.storeState + ".Visit Zeepzoop for " + storedatas.storeName + " address, contact number, reviews & catalogue",
                    //         keywords: storedatas.storeName + " in " + storedatas.storeCity + ", " + cat,
                    //         image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                    //         type: 'store',
                    //         // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                    //         url: 'https://' + req.get('host') + req.originalUrl,
                    //         site: 'Zeepzoop',
                    //         domain: 'zeepzoop.com'
                    //     }
                    // } else if (storedatas.buisnessOnline) {
                    //     seoData = {
                    //         title: storedatas.storeName + " For " + cat + " Shop Online | Zeepzoop",
                    //         description: "Check Designer " + cat + " By " + storedatas.storeName + " .Visit " + storedatas.storeName + " Website from ZeepZoop for Online Shopping.",
                    //         keywords: storedatas.storeName + " in " + storedatas.storeCity + ", " + cat,
                    //         image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                    //         type: 'store',
                    //         // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                    //         url: 'https://' + req.get('host') + req.originalUrl,
                    //         site: 'Zeepzoop',
                    //         domain: 'zeepzoop.com'
                    //     }
                    // }
                    var seoData = {
                        title: "Designer " + cat + " By " + storedatas.storeName + " in " + storedatas.storeCity + ", India",
                        description: "Check out " + storedatas.storeName + " designer " + cat + " collection on ZeepZoop. Visit ZeepZoop for " + storedatas.storeName + " catalogue, address and contact number.",
                        keywords: storedatas.storeName + " in " + storedatas.storeCity + ", " + cat,
                        image: global.config.variable.apiPath + '/' + storedatas.storeLogo,
                        type: 'store',
                        // url: req.headers['x-forwarded-proto'] ? 'https://' + req.get('host') + req.originalUrl : 'http://' + req.get('host') + req.originalUrl,
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }

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
                // res.redirect(301, '/')
                res.render('404', { seo: false, title: '404 page not found', page: '404-page' })
            }
        })
    }
}

module.exports = SdetailHandler;