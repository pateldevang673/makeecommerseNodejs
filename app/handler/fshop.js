const ValidationError = require(APP_ERROR_PATH + 'validation');
const NotFoundError = require(APP_ERROR_PATH + 'not-found');
const BaseAutoBindedClass = require(APP_BASE_PACKAGE_PATH + 'base-autobind');
var request = require('request');
var Promise = require('promise');
const URLStore = global.config.variable.apiPath;
// var url = require('url');
var urlArray = [];

class FshopController extends BaseAutoBindedClass {
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

    getShops(req, res) {
        console.log("All Store Page");
        var urls = "/stores/search?isActive=true"
        if (req.query.buisnessOffline) {
            urls += '&buisnessOffline=true';
        } else if (req.query.buisnessOnline) {
            urls += '&buisnessOnline=true';
        }

        if (req.query.city) {
            var cityName = req.query.city;
            urls += '&location=' + cityName;
        }

        var mainObj = {};
        Promise.all([
                this.requestAsync(req, URLStore + urls, 'stores'),
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
                    title: 'Zeepzoop Featured Shops',
                    description: 'Read Featured Shops related to Art, Craft, culture, festivals, different cities, fashion, Home décor and much more. It guides you about what to buy from different cities.',
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: 'https://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }

                res.render('fshop', {
                    seo: true,
                    seoData: seoData,
                    page: 'fshop-page',
                    stores: results['stores'],
                    storeslength: results['stores'].length,
                    titleURL: urlArray
                })

            })
    }
}

module.exports = FshopController;