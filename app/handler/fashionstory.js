const ValidationError = require(APP_ERROR_PATH + 'validation');
const NotFoundError = require(APP_ERROR_PATH + 'not-found');
const BaseAutoBindedClass = require(APP_BASE_PACKAGE_PATH + 'base-autobind');
var request = require('request');
var moment = require('moment');
var url = require('url');
const URLStore = global.config.variable.apiPath;
var urlArray = [];

class FashionStoryHandler extends BaseAutoBindedClass {
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

    getSingleBlog(req, res) {
        console.log("single story page")
        var optionsBlog = {
            url: URLStore + '/story/forweb/' + req.params.url,
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
            var blog = JSON.parse(results)['data'];
            if (blog) {
                var catBlogs = {
                    url: URLStore + '/story/?category=' + blog.category,
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
                }).then((catBlogsdata) => {
                    var catBlog = JSON.parse(catBlogsdata)['data'];
                    var seoData = {
                        title: blog.title,
                        seodesc: req.params.url,
                        description: "Zeepzoop",
                        keywords: "ZeepZoop Stories For" + blog.category,
                        image: global.config.variable.apiPath + '/' + blog.bannerImage,
                        type: 'story',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }

                    res.render('storydetail', {
                        seo: true,
                        seoData: seoData,
                        page: 'storydetail-page',
                        titleurl: req.params.url,
                        catBlog: catBlog,
                        catBlogLength: catBlog.length > 6 ? 6 : catBlog.length,
                        blog: blog,
                        time: moment(blog.dateCreated).format("Do MMM YYYY"),
                        subtitle: blog.subTitle,
                        shareUrl: req.protocol + '://' + req.get('host') + req.originalUrl
                    })
                })
            } else {
                res.redirect(301, '/')
                // res.render('404', { seo: false, title: '404 page not found', page: '404-page' })
            }
        })
    }

    getSearch(req, res) {
        console.log("All Story Page");
        var mainObj = {};
        Promise.all([
                this.requestAsync(req, URLStore + '/story/?category=Decor+Story', 'DecoreStory'),
                this.requestAsync(req, URLStore + '/story/?category=Fashion+Story', 'FashionStory'),
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
                    title: 'Fashion Stories By ZeepZoop Fashion Influencer',
                    description: "For all the fashion lovers, there is no place better than ZeepZoop. ZeepZoop's Fashion Influencer Program where you can get paid for your fashion love.",
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: 'https://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }
                res.render('fashionstory', {
                    seo: true,
                    seoData: seoData,
                    page: 'fashionstory-page',
                    DecoreStory: results['DecoreStory'],
                    DecoreStorylength: results['DecoreStory'].length,
                    FashionStory: results['FashionStory'],
                    FashionStorylength: results['FashionStory'].length,
                    titleURL: urlArray
                })
            })
    }

    SStory(req, res) {
        console.log("Shanaya Story Page");
        var mainObj = {};
        Promise.all([
                this.requestAsync(req, URLStore + '/story/shanayastory/5bdd8097d0b5265f807aac43', 'ShanayaStory'),
                // this.requestAsync(req, URLStore + '/story/?category=Fashion+Story', 'FashionStory'),
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
                    title: "Shanaya's Fashion Story - ZeepZoop",
                    description: "Shanaya and her fashion stories is the talk of latest fashion trends, styles and fashion style tips for girls.",
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: 'https://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }
                res.render('shanayastory', {
                    seo: true,
                    seoData: seoData,
                    page: 'shanayastory-page',
                    ShanayaStory: results['ShanayaStory'],
                    ShanayaStorylength: results['ShanayaStory'].length,
                    titleURL: urlArray
                })
            })
    }
}

module.exports = FashionStoryHandler;