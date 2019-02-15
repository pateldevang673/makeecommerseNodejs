// searchresult/**

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
            url: URLStore + '/story/forweb/' + req.params.id,
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
                // this.requestAsync(req, URLStore + '/blogs/search?sort=true', 'trendingBlogs'),
                // this.requestAsync(req, URLStore + '/blogs/search', 'newBlogs'),
                this.requestAsync(req, URLStore + '/story/?category=Decor+Story', 'DecoreStory'),
                this.requestAsync(req, URLStore + '/story/?category=Fashion+Story', 'FashionStory'),
                // this.requestAsync(req, URLStore + '/blogs/search?&category=Around+The+World', 'AroundTheWorld'),
                // this.requestAsync(req, URLStore + '/blogs/search?&category=Fashion', 'fashion'),
                // this.requestAsync(req, URLStore + '/blogs/search?&category=Culture+and+Heritage', 'CultureHeritage'),
                // this.requestAsync(req, URLStore + '/blogs/search?&category=Wedding+Bells', 'WeddingBells'),
                // this.requestAsync(req, URLStore + "/blogs/search?&category=Ceo's+Diary", "CeoBlog"),
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
}

module.exports = FashionStoryHandler;