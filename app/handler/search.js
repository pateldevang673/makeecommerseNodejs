// searchresult/**

const ValidationError = require(APP_ERROR_PATH + 'validation');
const NotFoundError = require(APP_ERROR_PATH + 'not-found');
const BaseAutoBindedClass = require(APP_BASE_PACKAGE_PATH + 'base-autobind');
var request = require('request');
var url = require('url');

const URLStore = global.config.variable.apiPath;
var urlArray = [];

class SearchHandler extends BaseAutoBindedClass {
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

    getSearch(req, res) {

        var url = "/stores/search?"
        if (req.query.buisnessOnline) {
            url += 'buisnessOnline=' + req.query.buisnessOnline;
        } else if (req.query.buisnessOffline) {
            url += 'buisnessOffline=' + req.query.buisnessOffline;
        }
        if (req.query.location) {
            var cityName = req.query.location;
            url += '&location=' + cityName;
        }
        if (req.query.searchFor) {
            url += '&search=' + req.query.searchFor;
        }

        var mainObj = {};
        Promise.all([
                this.requestAsync(req, URLStore + url, 'searchResult'),
            ])
            .then(function(allData) {
                mainObj['trendingCollections'] = [];
                return new Promise(function(resolve, reject) {
                    for (var i = 0; i < allData.length; i++) {
                        mainObj[allData[i][0]] = allData[i][1]
                    }
                    resolve(mainObj);
                });
            }).then((results) => {
                var seoData = {
                    title: 'Zeepzoop Your Shopping Guide',
                    description: 'One of its kind first shopping assistant App for the Exploring Shopper in you. It makes shopping simpler for you by recommending you the best places to shop.',
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: req.protocol + '://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }
                if (results['searchResult'].length > 0) {
                    res.render('search', {
                        seo: true,
                        seoData: seoData,
                        page: 'search-page',
                        stores: results['searchResult'],
                        lengthStores: results['searchResult'].length,
                        host: req.get('host')
                    })
                } else {
                    res.render('search', {
                        seo: true,
                        seoData: seoData,
                        page: 'search-page',
                        stores: [],
                        lengthStores: 0,
                        host: req.get('host')
                    })
                }
            })
    }
}

module.exports = SearchHandler;