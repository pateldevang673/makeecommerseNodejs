const ValidationError = require(APP_ERROR_PATH + 'validation');
const NotFoundError = require(APP_ERROR_PATH + 'not-found');
const BaseAutoBindedClass = require(APP_BASE_PACKAGE_PATH + 'base-autobind');
var request = require('request');
var Promise = require('promise');
const URLStore = global.config.variable.apiPath;

var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');

class HomeHandler extends BaseAutoBindedClass {
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

    reqAsynctoken(req, url, token, type) {
        return new Promise(function(resolve, reject) {
            var URLStore = url;
            var optionsStore = {
                url: URLStore,
                method: 'GET',
                headers: {
                    'Authorization': "JWT " + token,
                    'Content-Type': "application/json"
                }
            };
            request(optionsStore, type, function(error, response, body) {
                return resolve([type, JSON.parse(body)['data']]);
            });
        });
    }

    requestVideo(req, url, type) {
        return new Promise(function(resolve, reject) {
            var URLStore = url;
            var optionsStore = {
                url: URLStore,
                part: 'snippet',
                method: 'GET',
                type: "json"
            };
            request(optionsStore, type, function(error, response, body) {
                return resolve([type, JSON.parse(body)['items']]);
            });
        });
    }

    getSingleHome(req, res) {
        if (localStorage.getItem('cityName') != null) {
            localStorage.setItem('cityName', 'Ahmedabad')
        }
        if (req.query.city) {
            var cityName = req.query.city;
        } else {
            var cityName = "Ahmedabad";
        }
        var mainObj = {};
        Promise.all([
                this.requestAsync(req, URLStore + '/collections/search?buisnessOffline=true&location=' + cityName, 'offlineCollections'),
                this.requestAsync(req, URLStore + '/collections/search?buisnessOnline=true', 'onlineCollections'),
                this.requestAsync(req, URLStore + '/categories', 'categories'),
                this.requestAsync(req, URLStore + '/stores/search?trending=true&buisnessOffline=true&location=' + cityName, 'trendingStores'),
                this.requestAsync(req, URLStore + '/stores/search?trending=true&buisnessOnline=true&location=' + cityName, 'onlineStores'),
                this.requestAsync(req, URLStore + '/stores/search?buisnessOffline=true&startStores=0&endStores=4&storeType=Editor&location=' + cityName, 'offlineeditorstore'),
                this.requestAsync(req, URLStore + '/offers/search?offerOnline=true', 'offersOnline'),
                this.requestAsync(req, URLStore + '/offers/search?offerOffline=true', 'offersOffline'),
                this.requestAsync(req, URLStore + '/stores/newStore?buisnessOnline=true', 'newStoresOnline'),
                this.requestAsync(req, URLStore + '/stores/newStore?buisnessOffline=true&location=' + cityName, 'newStoresOffline'),
                this.requestAsync(req, URLStore + '/stores/search?buisnessOnline=true&startStores=8&endStores=12', 'sponsoredOnline'),
                this.requestAsync(req, URLStore + '/stores/search?buisnessOffline=true&startStores=12&endStores=16&location=' + cityName, 'sponsoredOffline'),
                this.requestAsync(req, URLStore + '/blogs/search?startBlogs=0&endBlogs=5', 'trendingBlogs'),
                this.requestAsync(req, URLStore + '/cities', 'cities'),
                this.requestAsync(req, URLStore + '/story/?startStories=0&endStories=5', 'stories'),
                this.requestAsync(req, URLStore + '/story/shanayastory/5bdd8097d0b5265f807aac43?startStores=0&endStores=5', 'Shanayastories'),
                // this.requestVideo(req, "https://www.googleapis.com/youtube/v3/search?order=videocount&part=snippet&channelId=UCQajBUKn91xbZ22StHqeOzg&maxResults=4&key=AIzaSyB6kIwhuE2hJl6LCbSKw7Kas8qa82BcKjc", 'videos')
                // 'date type of orders'. Allowed values: [date, rating, relevance, title, videocount, viewcount]
            ])
            .then(function(allData) {
                mainObj['trendingCollections'] = [];
                return new Promise(function(resolve, reject) {
                    for (var i = 0; i < allData.length; i++) {
                        mainObj[allData[i][0]] = allData[i][1]
                    }
                    resolve(mainObj);
                });
            })
            .then((results) => {
                var seoData = {
                    title: 'Online Shopping Guide and Fashion Influencer App - ZeepZoop',
                    description: "India's First Online Shopping Guide and Brand Discovery Website with 600+ Designer Labels listed to buy Designer Cloths, Jewellery, Accessories & Home Decor.",
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: 'https://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }
                res.render('index', {
                    seo: true,
                    seoData: seoData,
                    page: 'home-page',
                    offlineCollections: results['offlineCollections'],
                    lengthofflineCollections: results['offlineCollections'].length > 10 ? 10 : results['offlineCollections'].length,
                    onlineCollections: results['onlineCollections'],
                    lengthonlineCollections: results['onlineCollections'].length > 10 ? 10 : results['onlineCollections'].length,
                    // catalogs: results['trendingCatalogs'],
                    // lengthCatalogs: results['trendingCatalogs'].length > 10 ? 10 : results['trendingCatalogs'].length,
                    stores: results['trendingStores'],
                    storesLength: results['trendingStores'].length > 6 ? 6 : results['trendingStores'].length,
                    onlineStores: results['onlineStores'],
                    onlineStoresLength: results['onlineStores'].length > 6 ? 6 : results['onlineStores'].length,
                    newStoresOnline: results['newStoresOnline'],
                    newStoresOnlineLength: results['newStoresOnline'].length > 6 ? 6 : results['newStoresOnline'].length,
                    newStoresOffline: results['newStoresOffline'],
                    newStoresOfflineLength: results['newStoresOffline'].length > 6 ? 6 : results['newStoresOffline'].length,
                    blogs: results['trendingBlogs'],
                    lengthBlogs: 5,
                    cities: results['cities'],
                    citiesLength: results['cities'].length,
                    offersOnline: results['offersOnline'],
                    lengthOffersOnline: results['offersOnline'].length > 10 ? 10 : results['offersOnline'].length,
                    offersOffline: results['offersOffline'],
                    lengthoffersOffline: results['offersOffline'].length > 10 ? 10 : results['offersOffline'].length,
                    // videos: results['videos'] ? results['videos'] : [],
                    // lengthVideos: results['videos'] ? results['videos'].length : 0,
                    offlineeditor: results['offlineeditorstore'],
                    offlineeditorlength: results['offlineeditorstore'].length,
                    categories: results['categories'],
                    lengthCategories: results['categories'].length,
                    stories: results['stories'],
                    lengthStories: results['stories'].length,
                    Shanaystories: results['Shanayastories'],
                    lengthShanayStories: results['Shanayastories'].length,
                    sponsoredOnline: results['sponsoredOnline'],
                    sponsoredOffline: results['sponsoredOffline'],
                    host: req.get('host')
                })
            })
    }

    resetPassword(req, res) {
        res.render('reset', { seo: false, title: 'ZeepZoop password reset', page: 'reset-page' })
    }

    story(req, res) {
        console.log("Zeepzoop Story Page");
        var seoData = {
            title: 'ZeepZoop Story - Online shopping Guide for Men and Women',
            description: 'One of a Kind, India’s Funded Startup offering Brand Listing for Fashion & Lifestyle Designers and Online Shopping Guide for Men and Women. Read ZeepZoop Story..',
            keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
            image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
            type: 'website',
            url: 'https://' + req.get('host') + req.originalUrl,
            site: 'Zeepzoop',
            domain: 'zeepzoop.com'
        }
        res.render('story', {
            seo: true,
            seoData: seoData,
            page: 'story-page'
        })
    }


    registerbrand(req, res) {
        console.log("Zeepzoop Registerbrand Page");
        var seoData = {
            title: 'Register Your Brand On ZeepZoop',
            description: 'Are you a Fashion or a Lifestyle Designer? Register Your Designer Label on ZeepZoop for Your Clothing, Jewellery, Accessories and Home Décor Collection.',
            keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
            image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
            type: 'website',
            url: 'https://' + req.get('host') + req.originalUrl,
            site: 'Zeepzoop',
            domain: 'zeepzoop.com'
        }
        res.render('registerbrand', {
            seo: true,
            seoData: seoData,
            page: 'registerbrand-page'
        })
    }


    contactus(req, res) {
        console.log("contact us Page");
        var seoData = {
            title: 'Contact ZeepZoop - Online shopping Guide with Designer Labels and Brands in India',
            description: 'Contact us on 9624851199 for Your Questions and Queries related to Fashion Designers, Registering Your Brand and Shopping.',
            keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
            image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
            type: 'website',
            url: 'https://' + req.get('host') + req.originalUrl,
            site: 'Zeepzoop',
            domain: 'zeepzoop.com'
        }
        res.render('contactus', {
            seo: true,
            seoData: seoData,
            page: 'contactus-page'
        })
    }


    partners(req, res) {
        console.log("Partners Page");
        var seoData = {
            title: 'ZeepZoop Meet the Founders, Partners & CEO of ZeepZoop',
            description: 'Meet guardians of ZeepZoop – The Founders, Partners & CEO of ZeepZoop, India’s First Ever Shopping Guide & Brand Discovery Platform for Designer Brands & Labels',
            keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
            image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
            type: 'website',
            url: 'https://' + req.get('host') + req.originalUrl,
            site: 'Zeepzoop',
            domain: 'zeepzoop.com'
        }
        res.render('partners', { seo: false, title: 'ZeepZoop Partners', page: 'partners' })
    }

    thankyou(req, res) {
        console.log("Thank You Page");
        res.render('thankyou', { seo: false, title: 'ZeepZoop – India’s First Shopping Guide & Brand Discovery Platform', page: 'thankyou' })
    }

    team(req, res) {
        console.log("team Page");
        var seoData = {
            title: 'ZeepZoop Team – India’s First Shopping Guide & Brand Discovery Platform',
            description: 'Meet ZeepZoop Force – India’s First Ever Shopping Guide & Brand Discovery Platform available in the form of Website and Mobile App.',
            keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
            image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
            type: 'website',
            url: 'https://' + req.get('host') + req.originalUrl,
            site: 'Zeepzoop',
            domain: 'zeepzoop.com'
        }
        res.render('team', {
            seo: true,
            seoData: seoData,
            page: 'team'
        })
    }


    ceo(req, res) {
        console.log("CEO Page");
        var mainObj = {};
        Promise.all([
                this.requestAsync(req, URLStore + "/blogs/search?&category=Ceo's+Diary", "CeoBlog"),
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
                    title: 'Meet The CEO of ZeepZoop – Bhavya Modi',
                    description: 'Know the Story of Bhavya Modi (CEO) Who Founded ZeepZoop – India’s First Ever Shopping Guide & Brand Discovery Platform for Designer Brands & Labels.',
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: 'https://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }
                res.render('ceo', {
                    seo: true,
                    seoData: seoData,
                    CeoBlog: results['CeoBlog'],
                    CeoBloglength: results['CeoBlog'].length,
                    page: 'ceo'
                });
            });
    }

    userProfile(req, res) {
        console.log("user Profile Page");
        var mainObj = {};
        var getuser = {
            url: URLStore + '/users/getToken/' + req.params.id,
            method: 'GET',
            headers: {
                'Authorization': "maximumvsminimumsecurity",
                'Content-Type': "application/json"
            }
        };
        return new Promise(function(resolve, reject) {
            request(getuser, function(error, response, body) {
                resolve(body)
            });
        }).then((results) => {
            var datausr = JSON.parse(results)['data'];
            Promise.all([
                    this.reqAsynctoken(req, URLStore + '/stores/bookmarkbyuser/' + datausr._id, datausr.token, 'Userbookmark'),
                    this.reqAsynctoken(req, URLStore + '/reviews/user/' + datausr._id, datausr.token, 'Userreview'),
                    this.reqAsynctoken(req, URLStore + '/mylists/user/' + datausr._id, datausr.token, 'UserMylist'),
                    this.reqAsynctoken(req, URLStore + '/blogs/savebyuser/' + datausr._id, datausr.token, 'UserBlogs'),
                    this.reqAsynctoken(req, URLStore + '/users/' + datausr._id, datausr.token, 'UserInfo')
                ])
                .then(function(allData) {
                    return new Promise(function(resolve, reject) {
                        for (var i = 0; i < allData.length; i++) {
                            mainObj[allData[i][0]] = allData[i][1]
                        }
                        resolve(mainObj);
                    });
                })
                .then((results) => {
                    console.log("results['Userbookmark']")
                    console.log(results['Userbookmark'])
                    var uimage = 'https://api.zeepzoop.com/' + datausr.userImage
                    var seoData = {
                        title: datausr.name,
                        description: datausr.name,
                        keywords: 'User',
                        image: uimage,
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                    res.render('userprofile', {
                        seo: true,
                        seoData: seoData,
                        page: 'userprofile',
                        userdata: results['UserInfo'],
                        Userbookmark: results['Userbookmark'],
                        Usrbookmarklength: results['Userbookmark'].length,
                        Userreview: results['Userreview'],
                        Userreviewlength: results['Userreview'].length,
                        UserMylist: results['UserMylist'],
                        UserMylistlength: results['UserMylist'].length,
                        UserBlogs: results['UserBlogs'],
                        UserBlogslength: results['UserBlogs'].length,
                    })
                })
        })
    }
}

module.exports = HomeHandler;