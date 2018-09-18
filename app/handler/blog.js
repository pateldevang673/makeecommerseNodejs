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

class BlogHandler extends BaseAutoBindedClass {
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

    getAuthorBlogs(req, res) {

        var mainObj = {};
        Promise.all([
                this.requestAsync(req, URLStore + '/blogs/search?authorURL=' + req.params.authorURL + '&trending=true&sort=true', 'authorBlogs'),
                this.requestAsync(req, URLStore + '/blogs/search?trending=true&sort=true', 'recommendedBlogs'),
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
                    title: 'Zeepzoop Blogs',
                    description: 'Read blogs related to Art, Craft, culture, festivals, different cities, fashion, Home décor and much more. It guides you about what to buy from different cities.',
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: req.protocol + '://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }
                res.render('auther', {
                    seo: true,
                    seoData: seoData,
                    page: 'auther-page',
                    authorBlogs: results['authorBlogs'],
                    authorBlogslength: results['authorBlogs'].length,
                    recommendedBlogs: results['recommendedBlogs'],
                    titleURL: urlArray
                })
            })
    }

    getBlogs(req, res) {

        var mainObj = {};
        Promise.all([
                this.requestAsync(req, URLStore + '/blogs/search?startBlogs=5&endBlogs=8&trending=true', 'trendingBlogs'),
                this.requestAsync(req, URLStore + '/blogs/search?startBlogs=0&endBlogs=4', 'newBlogs'),
                this.requestAsync(req, URLStore + '/blogs/search?&category=Brand+Stories&startBlogs=0&endBlogs=11', 'brandStories'),
                this.requestAsync(req, URLStore + '/blogs/search?&category=Around+The+World&startBlogs=0&endBlogs=11', 'AroundTheWorld'),
                this.requestAsync(req, URLStore + '/blogs/search?&category=Fashion&startBlogs=0&endBlogs=11', 'fashion'),
                this.requestAsync(req, URLStore + '/blogs/search?&category=Wedding+Bells&startBlogs=0&endBlogs=11', 'WeddingBells'),
                this.requestAsync(req, URLStore + '/blogs/search?&category=Home+Decor&startBlogs=0&endBlogs=11', 'HomeDecor'),
                this.requestAsync(req, URLStore + '/blogs/search?&category=Culture+and+Heritage&startBlogs=0&endBlogs=11', 'CultureHeritage'),
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
                    title: 'The Official ZeepZoop Blog',
                    description: 'This is the official blog of ZeepZoop. Read about most trending and latest Fashion & Brand Stories. Read Blogs from Around the World, Wedding, Home Décor, Culture & Heritage.',
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: req.protocol + '://' + req.get('host') + req.originalUrl,
                    site: 'Zeepzoop',
                    domain: 'zeepzoop.com'
                }
                res.render('blog', {
                    seo: true,
                    seoData: seoData,
                    page: 'blogs-page',
                    trendingBlogs: results['trendingBlogs'],
                    trendingBlogslength: results['trendingBlogs'].length,
                    newBlogs: results['newBlogs'],
                    newBlogslength: results['newBlogs'].length,
                    brandStories: results['brandStories'],
                    brandStorieslength: results['brandStories'].length,
                    AroundTheWorld: results['AroundTheWorld'],
                    AroundTheWorldlength: results['AroundTheWorld'].length,
                    fashion: results['fashion'],
                    fashionlength: results['fashion'].length,
                    WeddingBells: results['WeddingBells'],
                    WeddingBellslength: results['WeddingBells'].length,
                    HomeDecor: results['HomeDecor'],
                    HomeDecorlength: results['HomeDecor'].length,
                    CultureHeritage: results['CultureHeritage'],
                    CultureHeritagelength: results['CultureHeritage'].length,
                    titleURL: urlArray
                })
            })
    }


    getSingleBlog(req, res) {
        var q = url.parse(URLStore + '/blogs/search?URL=' + req.params.url, true);
        var optionsBlog = {
            url: URLStore + '/blogs/search?URL=' + req.params.url,
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
            var blog = JSON.parse(results)['data'][0];
            var catBlogs = {
                url: URLStore + '/blogs/search?&category=' + blog.category,
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
                if (blog) {
                    var seoData = {
                        title: blog.title,
                        description: blog.metaDescription,
                        keywords: blog.metaKeyword,
                        image: global.config.variable.apiPath + '/' + blog.blogPicture,
                        type: 'article',
                        url: req.protocol + '://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }

                    res.render('detail', {
                        seo: true,
                        seoData: seoData,
                        catBlog: catBlog,
                        catBlogLength: catBlog.length > 6 ? 6 : catBlog.length,
                        page: 'detail-page',
                        titleurl: req.params.url,
                        blog: blog,
                        shareUrl: req.protocol + '://' + req.get('host') + req.originalUrl
                    })
                } else {
                    res.render('404', { seo: false, title: '404 page not found', page: '404-page' })
                }
            })

        })
    }
}

module.exports = BlogHandler;