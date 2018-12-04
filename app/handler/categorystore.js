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

class CategoryHandler extends BaseAutoBindedClass {
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


    getClothingstore(req, res) {

        var mainObj = {};
        if (req.query.buisnessOffline) {
            // var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=' + req.params.id;
            var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=5a51e507ff645771bf57dc14';
        } else if (req.query.buisnessOnline) {
            var urls = '/stores/search?trending=true&isActive=true&buisnessOnline=true&category=5a51e507ff645771bf57dc14';
        } else {
            var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=5a51e507ff645771bf57dc14';
        }
        if (req.query.city) {
            urls += "&location=" + req.query.city;
        }


        Promise.all([
                this.requestAsync(req, URLStore + urls, 'categoryStore'),
                // this.requestAsync(req, URLStore + "/categories/" + req.params.id, 'category')
                this.requestAsync(req, URLStore + "/categories/5a51e507ff645771bf57dc14", 'category')
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
                    title: 'Top Men and Women Designer Brands and Clothing Labels',
                    description: 'Explore most iconic designer clothing brands collection with Catalogues for Men and Women. Buy online or offline from designer boutiques and portals..',
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Clothing, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: 'https://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }

                res.render('Clothing', {
                    seo: true,
                    seoData: seoData,
                    page: 'Clothing-page',
                    categoryStore: results['categoryStore'],
                    categoryStorelength: results['categoryStore'].length > 12 ? 12 : results['categoryStore'].length,
                    category: results['category'],
                    titleURL: urlArray
                })
            })
    }

    getJewellerystore(req, res) {

        var mainObj = {};
        if (req.query.buisnessOffline) {
            // var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=' + req.params.id;
            var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=5a51e528ff645771bf57dc15';
        } else if (req.query.buisnessOnline) {
            var urls = '/stores/search?trending=true&isActive=true&buisnessOnline=true&category=5a51e528ff645771bf57dc15';
        } else {
            var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=5a51e528ff645771bf57dc15';
        }
        if (req.query.city) {
            urls += "&location=" + req.query.city;
        }

        Promise.all([
                this.requestAsync(req, URLStore + urls, 'categoryStore'),
                // this.requestAsync(req, URLStore + "/categories/" + req.params.id, 'category')
                this.requestAsync(req, URLStore + "/categories/5a51e528ff645771bf57dc15", 'category')
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
                    title: 'Best Handcrafted Designer Jewellery Brands Collection',
                    description: "Jewellery complete's person outfit. Explore top famous designer jewellery brands from fashion jewellery to luxury handcrafted ethnic jewellery.",
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Jewellery, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: 'https://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }

                res.render('Jewellery', {
                    seo: true,
                    seoData: seoData,
                    page: 'Jewellery-page',
                    categoryStore: results['categoryStore'],
                    categoryStorelength: results['categoryStore'].length > 12 ? 12 : results['categoryStore'].length,
                    category: results['category'],
                    titleURL: urlArray
                })
            })
    }

    getAccessoriesstore(req, res) {

        var mainObj = {};
        if (req.query.buisnessOffline) {
            // var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=' + req.params.id;
            var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=5a51e544ff645771bf57dc16';
        } else if (req.query.buisnessOnline) {
            var urls = '/stores/search?trending=true&isActive=true&buisnessOnline=true&category=5a51e544ff645771bf57dc16';
        } else {
            var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=5a51e544ff645771bf57dc16';
        }
        if (req.query.city) {
            urls += "&location=" + req.query.city;
        }

        Promise.all([
                this.requestAsync(req, URLStore + urls, 'categoryStore'),
                // this.requestAsync(req, URLStore + "/categories/" + req.params.id, 'category')
                this.requestAsync(req, URLStore + "/categories/5a51e544ff645771bf57dc16", 'category')
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
                    title: 'Designer Fashion Accessories Shopping for Men & Women',
                    description: "Explore India's best designer accessories collection and catalogues for Men and Women at ZeepZoop.com. Shop from Designer boutiques and portals.",
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Accessories, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: 'https://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }

                res.render('Accessories', {
                    seo: true,
                    seoData: seoData,
                    page: 'Accessories-page',
                    categoryStore: results['categoryStore'],
                    categoryStorelength: results['categoryStore'].length > 12 ? 12 : results['categoryStore'].length,
                    category: results['category'],
                    titleURL: urlArray
                })
            })
    }

    getHomedecorstore(req, res) {

        var mainObj = {};
        if (req.query.buisnessOffline) {
            // var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=' + req.params.id;
            var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=5a51e626ff645771bf57dc1a';
        } else if (req.query.buisnessOnline) {
            var urls = '/stores/search?trending=true&isActive=true&buisnessOnline=true&category=5a51e626ff645771bf57dc1a';
        } else {
            var urls = '/stores/search?trending=true&isActive=true&buisnessOffline=true&category=5a51e626ff645771bf57dc1a';
        }
        if (req.query.city) {
            urls += "&location=" + req.query.city;
        }

        Promise.all([
                this.requestAsync(req, URLStore + urls, 'categoryStore'),
                // this.requestAsync(req, URLStore + "/categories/" + req.params.id, 'category')
                this.requestAsync(req, URLStore + "/categories/5a51e626ff645771bf57dc1a", 'category')
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
                    title: 'Guide to Best Home Decor Designer Product and Accessories',
                    description: "Explore luxury Home Decor Product from Country's top home decor designer catalogues that match your style. Shop Home Décor Products from designer boutiques.",
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Accessories, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: 'https://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }

                res.render('Home-Decor', {
                    seo: true,
                    seoData: seoData,
                    page: 'Home-Decor-page',
                    categoryStore: results['categoryStore'],
                    categoryStorelength: results['categoryStore'].length > 12 ? 12 : results['categoryStore'].length,
                    category: results['category'],
                    titleURL: urlArray
                })
            })
    }

    // getcategegorystore(req, res) {
    //     var mainObj = {};
    //     Promise.all([
    //             this.requestAsync(req, URLStore + '/collections/' + req.params.id, 'collectionStore'),
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

}

module.exports = CategoryHandler;