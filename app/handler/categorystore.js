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
        console.log("Clothing Category Page");

        if (req.query.buisnessOffline) {
            var querys = 'buisnessOffline=true';
        } else if (req.query.buisnessOnline) {
            var querys = 'buisnessOnline=true';
        } else {
            var querys = 'buisnessOffline=true';
        }
        if (req.query.city) {
            querys += "&location=" + req.query.city;
        }
        if (req.route.path == "/Clothing") {
            res.redirect(301, '/category/clothing?' + querys)
        }

        var mainObj = {};
        if (req.query.buisnessOffline) {
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
                    title: 'Top Clothing Brands, Fashion Designers for Men and Women',
                    description: 'Ultimate fashion shopping guide to luxury clothing brands for men and women. Search Ahmedabad, Mumbai, Bangalore, Delhi, Kolkata Designer Store.',
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

        console.log("jewellery Category Page");

        if (req.query.buisnessOffline) {
            var querys = 'buisnessOffline=true';
        } else if (req.query.buisnessOnline) {
            var querys = 'buisnessOnline=true';
        } else {
            var querys = 'buisnessOffline=true';
        }
        if (req.query.city) {
            querys += "&location=" + req.query.city;
        }
        if (req.route.path == "/Jewellery") {
            res.redirect(301, '/category/jewellery?' + querys)
        }

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
                    title: 'Contemporary Designer Jewellery, Gold Jewellery Online Shopping',
                    description: "An ultimate jewellery buying guide for traditional jewellery, bridal jewellery and ethnic jewellery from famous jewellery designer in your town.",
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
        console.log("Accessories Category Page");

        if (req.query.buisnessOffline) {
            var querys = 'buisnessOffline=true';
        } else if (req.query.buisnessOnline) {
            var querys = 'buisnessOnline=true';
        } else {
            var querys = 'buisnessOffline=true';
        }
        if (req.query.city) {
            querys += "&location=" + req.query.city;
        }
        if (req.route.path == "/Accessories") {
            res.redirect(301, '/category/accessories?' + querys)
        }

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
                    title: 'Fashion Accessories Online | Modern Home Accessories',
                    description: "Designer Fashion Accessories guide for men and women from famous accessories brands. ZeepZoop is a one-stop holistic place for all designer accessories.",
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
        console.log("Home Decore Category Page");

        if (req.query.buisnessOffline) {
            var querys = 'buisnessOffline=true';
        } else if (req.query.buisnessOnline) {
            var querys = 'buisnessOnline=true';
        } else {
            var querys = 'buisnessOffline=true';
        }
        if (req.query.city) {
            querys += "&location=" + req.query.city;
        }
        if (req.route.path == "/Home-Decor") {
            res.redirect(301, '/category/home-decor?' + querys)
        }

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
                    title: 'Home Decor Stores and Home Interior Design Ideas',
                    description: "ZeepZoop guide you to shop for the best home decorating product and accessories from country's top home decor designer.",
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
}

module.exports = CategoryHandler;