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

class CatalougeHandler extends BaseAutoBindedClass {
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


    getcatalouge(req, res) {
        var mainObj = {};
        var urls = "/catalogs/featurecatalog?startCatalogs=0&endCatalogs=20"
        if (req.query.buisnessOffline) {
            urls += '&buisnessOffline=true';
        } else if (req.query.buisnessOnline) {
            urls += '&buisnessOnline=true';
        }

        if (req.query.city) {
            var cityName = req.query.city;
            urls += '&location=' + cityName;
        }

        Promise.all([
                this.requestAsync(req, URLStore + urls, 'catalougsStore'),
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
                    title: 'Zeepzoop Catalouge',
                    description: 'Read Catalouge related to Art, Craft, culture, festivals, different cities, fashion, Home décor and much more. It guides you about what to buy from different cities.',
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: req.protocol + '://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }

                res.render('catalouge', {
                    seo: true,
                    seoData: seoData,
                    page: 'catalouge-page',
                    catelouge: results['catalougsStore'],
                    catelougelength: results['catalougsStore'].length,
                    titleURL: urlArray
                })
            })
    }

}

module.exports = CatalougeHandler;