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
        if (req.params.authorURL == "Citrine") {
            res.redirect(301, '/brand/Citrine')
        }
        if (req.params.authorURL == "Vrisa") {
            res.redirect(301, '/brand/Vrisa')
        }
        if (req.params.authorURL == "Matsya") {
            res.redirect(301, '/brand/Matsya')
        }
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
                if (results['authorBlogs'].length > 0) {
                    var seoData = {
                        title: 'Zeepzoop Blogs',
                        description: 'Read blogs related to Art, Craft, culture, festivals, different cities, fashion, Home décor and much more. It guides you about what to buy from different cities.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
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
                } else {
                    res.render('404', { seo: false, title: '404 page not found', page: '404-page' })
                }
            })
    }

    getBlogs(req, res) {

        var mainObj = {};
        Promise.all([
                this.requestAsync(req, URLStore + '/blogs/search?sort=true', 'trendingBlogs'),
                this.requestAsync(req, URLStore + '/blogs/search', 'newBlogs'),
                this.requestAsync(req, URLStore + '/blogs/search?&category=Brand+Stories', 'brandStories'),
                this.requestAsync(req, URLStore + '/blogs/search?&category=Around+The+World', 'AroundTheWorld'),
                this.requestAsync(req, URLStore + '/blogs/search?&category=Fashion', 'fashion'),
                this.requestAsync(req, URLStore + '/blogs/search?&category=Wedding+Bells', 'WeddingBells'),
                this.requestAsync(req, URLStore + '/blogs/search?&category=Home+Decor', 'HomeDecor'),
                this.requestAsync(req, URLStore + '/blogs/search?&category=Culture+and+Heritage', 'CultureHeritage'),
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
                    title: 'The Official ZeepZoop Blog',
                    description: 'This is the official blog of ZeepZoop. Read about most trending and latest Fashion & Brand Stories. Read Blogs from Around the World, Wedding, Home Décor, Culture & Heritage.',
                    keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                    image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                    type: 'website',
                    url: 'https://' + req.get('host') + req.originalUrl,
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
                    CeoBlog: results['CeoBlog'],
                    CeoBloglength: results['CeoBlog'].length,
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
                        url: 'https://' + req.get('host') + req.originalUrl,
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