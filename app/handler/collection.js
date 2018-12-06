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

class CollectionHandler extends BaseAutoBindedClass {
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

    // getcategegorystore(req, res) {

    //     var mainObj = {};
    //     Promise.all([
    //             // this.requestAsync(req, URLStore + '/collections/' + req.params.id, 'collectionStore'),
    //             // this.requestAsync(req, URLStore + '/collections/5a51e507ff645771bf57dc14', 'collectionStore'),
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


    getBlogs(req, res) {
        console.log("Collection Page");
        var mainObj = {};
        if (req.params.url == "5b97a34bad670834810a2c73") {
            res.redirect(301, '/collection/wedding-special')
        }
        if (req.params.url == "5b98ef6cc745cd5c18b700c5") {
            res.redirect(301, '/collection/mens-choice')
        }
        if (req.params.url == "5b990da562282263f3416da5") {
            res.redirect(301, '/collection/festive-vibes-ahmedabad')
        }
        if (req.params.url == "5b97a1b3ad670834810a2c69") {
            res.redirect(301, '/collection/designer-saree')
        }
        if (req.params.url == "5b98f063c745cd5c18b700ce") {
            res.redirect(301, '/collection/minimal-homes')
        }
        if (req.params.url == "5b98f4cbc745cd5c18b700dc") {
            res.redirect(301, '/collection/designer-saree-ahmedabad')
        }
        if (req.params.url == "5b98f337c745cd5c18b700d6") {
            res.redirect(301, '/collection/casually-classy-ahmedabad')
        }
        if (req.params.url == "5b97976d676fab31885d6b7f") {
            res.redirect(301, '/collection/casually-classy')
        }
        if (req.params.url == "5b98f5a7c745cd5c18b700e8") {
            res.redirect(301, '/collection/mens-choice-ahmedabad')
        }
        if (req.params.url == "5b98eab9c745cd5c18b700bc") {
            res.redirect(301, '/collection/festive-vibes')
        }
        if (req.params.url == "5b98f530c745cd5c18b700e2") {
            res.redirect(301, '/collection/wedding-special-ahmedabad')
        }
        if (req.params.url == "5b98f660c745cd5c18b700ee") {
            res.redirect(301, '/collection/minimal-homes-ahmedabad')
        }

        Promise.all([
                this.requestAsync(req, URLStore + '/collections/search?collectionURL=' + req.params.url, 'collectionStore'),
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
                var seourl = req.params.url;
                if (seourl == "casually-classy-ahmedabad" || seourl == "casually-classy-delhi" || seourl == "casually-classy-mumbai") {
                    var seoData = {
                        title: 'Browse Casual Collection | Best Casual Wear Designers in ' + results['collectionStore'][0].cityName[0],
                        description: 'Browse Causal Collection like Smart Casuals, Kurtas, Kurtis and Dresses from Best Casual Wear Designers in ' + results['collectionStore'][0].cityName[0] + '. Casual Classy Designer Labels for Men and Women.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }
                if (seourl == "designer-saree-ahmedabad" || seourl == "designer-saree-delhi" || seourl == "designer-saree-mumbai") {
                    var seoData = {
                        title: 'Designer Sarees in ' + results['collectionStore'][0].cityName[0] + ' for Festivals & Wedding Shopping',
                        description: 'Looking for Designer Sarees in ' + results['collectionStore'][0].cityName[0] + ' for Festive Shopping and Wedding Wear? List of best Saree Designers in ' + results['collectionStore'][0].cityName[0] + ' for Unique & Traditional Saree Designs as per the Latest Trend.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }
                if (seourl == "wedding-special-ahmedabad" || seourl == "wedding-special-delhi" || seourl == "wedding-special-mumbai") {
                    var seoData = {
                        title: 'Designer Labels for Wedding Shopping in ' + results['collectionStore'][0].cityName[0] + '| Bridalwear Shopping',
                        description: 'Best Bridal wear Designers in ' + results['collectionStore'][0].cityName[0] + ' for Wedding Shopping for Bride’s trousseau Shopping. Look for Best Fashion Designers for Wedding Saree, Lehenga, Indo Western & Evening Gowns.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }
                if (seourl == "mens-choice-ahmedabad" || seourl == "mens-choice-delhi" || seourl == "mens-choice-mumbai") {
                    var seoData = {
                        title: 'Best Menswear Designers in ' + results['collectionStore'][0].cityName[0] + '| Designer Wedding Wear for Men',
                        description: 'Buy Designer Menswear in ' + results['collectionStore'][0].cityName[0] + '. Look for Designer Sherwani, Indowestern, Pathani, Bandhgala and Jodhpuris for Wedding Shopping for Men.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }

                if (seourl == "minimal-homes-ahmedabad") {
                    var seoData = {
                        title: 'Designer Home Décor Products in ' + results['collectionStore'][0].cityName[0] + '| Interior Designer Labels',
                        description: 'Love Minimalist Home and Looking for Designer Home Décor Products in ' + results['collectionStore'][0].cityName[0] + '? Check Best Interior Designer Labels for Interior Design and Home Decoration.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }
                if (seourl == "festive-vibes-ahmedabad" || seourl == "festive-vibes-delhi" || seourl == "festive-vibes-mumbai") {
                    var seoData = {
                        title: 'Festive & Occasion Wear Designers in ' + results['collectionStore'][0].cityName[0] + '| Exclusive Designer Wear',
                        description: 'Looking for Designer Festive wear Collection in ' + results['collectionStore'][0].cityName[0] + '? Best Fashion Designers for Men & Women offering Festive & Occasion Wear for Sarees, Lehenga, Suit, Sherwani & Evening Gowns.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }
                if (seourl == "casually-classy") {
                    var seoData = {
                        title: 'Casual Classy Dresses, Shoes & Accessories – Casual Style Fashion India',
                        description: 'Casual Classy is Your Style? Buy most amazing Designer Casual Dresses, Shoes, Shirts, Tops, and other Accessories for Men and Women. Your ultimate place to find Designer Labels for Casual Style Fashion in India.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }
                if (seourl == "designer-saree") {
                    var seoData = {
                        title: 'Top Designer Labels to Buy Designer Sarees in India -  Handpicked Sarees',
                        description: 'Look for Top Designer Labels to Buy Designer Sarees in India including Designer Patch Work Sarees, Embroidery Saree, Hand Painted Saree, Traditional Indian Handloom Sarees etc. Handpicked Sarees from best designer labels in India.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }
                if (seourl == "wedding-special") {
                    var seoData = {
                        title: 'Top Wedding Dress Designers In India to Buy Bridal & Groom Wear Online',
                        description: 'Approaching Wedding and Looking for a Designer Wedding Dress for your Big Day? Here we handpicked Top Wedding Dress Designers In India to Buy Bridal & Groom Wear Online.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }
                if (seourl == "festive-vibes") {
                    var seoData = {
                        title: 'Designer Ethnic Wear | Latest Festive & Occasion Wear Collection',
                        description: 'Looking for Designer Ethnic Wear for upcoming Festive season? Find latest festive wear and Occasion Wear Collection for Men and Women from India’s Best Designer Labels.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }
                if (seourl == "mens-choice") {
                    var seoData = {
                        title: 'Designer Menswear Collection in India | Wedding Collection for Groom',
                        description: 'Exclusive Menswear Collection from India’s Best Designer Labels. Look for Designer Casual Wear, Mens Ethnic Wear like Sherwani, Bandhgala and Suit for Wedding and Festive Season.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }
                if (seourl == "minimal-homes") {
                    var seoData = {
                        title: 'Designer Home Décor | Minimalist Home Décor Products Online',
                        description: 'Build your Dream home with Quirky Designer Home Décor Items. Best Home Décor Brands in India for Minimalist Home Décor Products online.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }
                if (seoData == undefined) {
                    var seoData = {
                        title: 'Zeepzoop Collection',
                        description: 'Looking for Designer Festive wear Collection in Different cities? Best Fashion Designers for Men & Women offering Festive & Occasion Wear for Sarees, Lehenga, Suit, Sherwani & Evening Gowns.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                }

                if (results['collectionStore'].length > 0) {
                    res.render('collection', {
                        seo: true,
                        seoData: seoData,
                        page: 'collection-page',
                        collectiondata: results['collectionStore'][0],
                        collectionOnStore: results['collectionStore'][0].storeId,
                        collectionOnStorelength: results['collectionStore'][0].storeId.length,
                        host: req.get('host'),
                        titleURL: urlArray
                    })
                }
            })
    }
}

module.exports = CollectionHandler;