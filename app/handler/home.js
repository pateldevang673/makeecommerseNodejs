const ValidationError = require(APP_ERROR_PATH + 'validation');
const NotFoundError = require(APP_ERROR_PATH + 'not-found');
const BaseAutoBindedClass = require(APP_BASE_PACKAGE_PATH + 'base-autobind');
var request = require('request');
var Promise = require('promise');
const URLStore = global.config.variable.apiPath;
// var urlArray = [];
// var LocalStorage = require('node-localstorage').LocalStorage,
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');


class HomeHandler extends BaseAutoBindedClass {
    constructor() {
        super();
        this._validator = require('validator');
    }
    requestAsync(req, url, type) {
        return new Promise(function (resolve, reject) {
            var URLStore = url;
            var optionsStore = {
                url: URLStore,
                method: 'GET',
                headers: {
                    'Authorization': "maximumvsminimumsecurity",
                    'Content-Type': "application/json"
                }
            };
            request(optionsStore, type, function (error, response, body) {
                return resolve([type, JSON.parse(body)['data']]);
            });
        });
    }
    getSingleHome(req, res) {
        console.log("cityName>>",localStorage.getItem('cityName'))
        if(localStorage.getItem('cityName') != null){
            localStorage.setItem('cityName','Ahmedabad')
        }
        // console.log(req.query)
        // var optionsStore = {
        //     url: URLStore + '/collections/latestcollections',
        //     method: 'GET',
        //     headers: {
        //         'Authorization': "maximumvsminimumsecurity",
        //         'Content-Type': "application/json"
        //     }
        // };
        // console.log(window.localStorage)
        // LocalStorage.setItem('cityName','Ahmedabad')
        // var myStorage = window.localStorage;
        let cityName=localStorage.getItem('cityName')
        // console.log("cityName")
        // console.log(cityName)
         var mainObj = {};
        Promise.all([
            this.requestAsync(req, URLStore + '/collections/latestcollections', 'trendingCollections'),
            this.requestAsync(req, URLStore + '/catalogs/featurecatalog', 'trendingCatalogs'),
            this.requestAsync(req, URLStore + '/stores/search?trending=true&&location='+cityName, 'trendingStores'),
            this.requestAsync(req, URLStore + '/offers', 'offers'),
            this.requestAsync(req, URLStore + '/stores/search?startStores=0&&endStores=9', 'newStores'),
            this.requestAsync(req, URLStore + '/blogs/search?startBlogs=0&endBlogs=4', 'trendingBlogs'),
            this.requestAsync(req, URLStore + '/cities', 'cities')
            
        ])
        .then(function (allData) {
            // console.log(allData)
            mainObj['trendingCollections'] = [];
            return new Promise(function (resolve, reject) {
                console.log("resolve")
                for (let i = 0; i < allData.length; i++) {
                    mainObj[allData[i][0]] = allData[i][1]
                    if (allData[i][0] == 'trendingStores') {
                        for (let j = 0; j < allData[i][1].length; j++) {
                            // console.log("1")
                            mainObj['trendingCatalogs'].push(allData[i][1][j].featureCatalog);
                        }
                    }
                }
                // console.log("mainObj>>",mainObj)
                resolve(mainObj);
            });
        }).then((results) => {
            // console.log("results>>",results)
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
            // console.log("seoData",results['trendingCatalogs'].length)
            // console.log("seoData",results['trendingCatalogs'])
            
            // console.log("jason data>>>",JSON.parse(results).trendingCollections)
            // res.render('index', { seo: true, seoData: seoData, page: 'home-page', collections: results['trendingCollections'], lengthCollection: results['trendingCollections'].length,catalogs: results['trendingCatalogs'],lengthCatalogs: results['trendingCatalogs'].length,
            res.render('index', { seo: true, seoData: seoData, page: 'home-page', collections: results['trendingCollections'], lengthCollection: results['trendingCollections'].length,catalogs: results['trendingCatalogs'],lengthCatalogs: results['trendingCatalogs'].length,
            stores: results['trendingStores'],lengthStores:6,offers:results['offers'],lengthOffers:results['offers'].length,newStores:results['newStores'], newStoresLength:3, blogs:results['trendingBlogs'],lengthBlogs:4,cities:results['cities'],citiesLength:results['cities'].length, host: req.get('host') })

        })
        // return new Promise(function (resolve, reject) {
        //     request(optionsStore, function (error, response, body) {
        //         if (body != null) {
        //             // for (var i = 0; i < JSON.parse(body)['data'].length; i++) {
        //             //     urlArray[i] = JSON.parse(body)['data'][i].title.trim().replace(/\s+/g, '-').toLowerCase()
        //             // }
        //             resolve(body)
        //         } else
        //             reject(new NotFoundError("blog not found"))
        //     });
        // }).then((results) => {
        //     var seoData = {
        //         title: 'Zeepzoop Your Shopping Guide',
        //         description: 'One of its kind first shopping assistant App for the Exploring Shopper in you. It makes shopping simpler for you by recommending you the best places to shop.',
        //         keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
        //         image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
        //         type: 'website',
        //         url: req.protocol + '://' + req.get('host') + req.originalUrl,
        //         site: 'Zeepzoop',
        //         domain: 'zeepzoop.com'
        //     }
        //     console.log(JSON.parse(results)['data'])
        //     res.render('index', { seo: true, seoData: seoData, page: 'home-page', collections: JSON.parse(results)['data'], length: JSON.parse(results)['data'].length, host: req.get('host') })

        // })
    }

    resetPassword(req, res) {
        res.render('reset', { seo: false, title: 'ZeepZoop password reset', page: 'reset-page' })
    }

    business(req, res) {
        res.render('business', { seo: false, title: 'ZeepZoop Business', page: 'business' })
    }
}

module.exports = HomeHandler;