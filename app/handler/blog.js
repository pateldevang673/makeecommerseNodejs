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
            p[c['fieldname']] = c;
            return p;
        }, {});
    }

    getAuthorBlogs(req, res) {
        var mainObj = {};

        if (req.route.path == "/auther/:authorURL") {
            res.redirect(301, '/blogs/author/' + req.params.authorURL)
        }
        if (req.params.authorURL == 'Praghti-Malhotra') {
            res.redirect(301, '/blogs/author/praghti-malhotra')
        }
        if (req.params.authorURL == 'Shubharambh') {
            res.redirect(301, '/blogs/author/shubharambh')
        }
        if (req.params.authorURL == 'Zeepzoop-Team') {
            res.redirect(301, '/blogs/author/zeepzoop-team')
        }
        if (req.params.authorURL == 'Hetal-Shah') {
            res.redirect(301, '/blogs/author/hetal-shah')
        }
        if (req.params.authorURL == 'Vanita-Jain') {
            res.redirect(301, '/blogs/author/vanita-jain')
        }
        if (req.params.authorURL == 'Maitri-Patel') {
            res.redirect(301, '/blogs/author/maitri-patel')
        }
        if (req.params.authorURL == 'Dhruvi-Savsani') {
            res.redirect(301, '/blogs/author/dhruvi-savsani')
        }
        if (req.params.authorURL == 'Bhavya-Modi') {
            res.redirect(301, '/blogs/author/bhavya-modi')
        }
        if (req.params.authorURL == 'Zarana-Rathod') {
            res.redirect(301, '/blogs/author/zarana-rathod')
        }
        if (req.params.authorURL == 'Shubham-Rajpara') {
            res.redirect(301, '/blogs/author/shubham-rajpara')
        }
        if (req.params.authorURL == 'Dipali-Kotadiya') {
            res.redirect(301, '/blogs/author/dipali-kotadiya')
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
                        title: 'Author of Zeepzoop Blogs',
                        description: 'Read blogs related to Art, Craft, culture, festivals, different cities, fashion, Home décor and much more. It guides you about what to buy from different cities.',
                        keywords: 'Art, Craft, culture, festivals, different cities, fashion, Home décor, E-commerce',
                        image: 'http://www.zeepzoop.com/images/zeepzoop.jpg',
                        type: 'website',
                        url: 'https://' + req.get('host') + req.originalUrl,
                        site: 'Zeepzoop',
                        domain: 'zeepzoop.com'
                    }
                    if (req.params.authorURL == 'dipali-kotadiya') {
                        seoData.title = 'Dipali Kotadiya - ZeepZoop';
                        seoData.description = "Dipali Kotadiya, a fashion blogger at ZeepZoop who love to see everything beautiful with good design and good art."
                    }
                    if (req.params.authorURL == 'pravesh-patel') {
                        seoData.title = 'Pravesh Patel - ZeepZoop';
                        seoData.description = "Pravesh Patel, a fashion blogger at ZeepZoop who's style speaks volume when it comes to trending looks."
                    }
                    if (req.params.authorURL == 'zarana-rathod') {
                        seoData.title = 'Zarana Rathod - ZeepZoop';
                        seoData.description = "Zarana Rathod, a fashion blogger and content marketing strategist at ZeepZoop. Her blog inspires you to revamp your wardrobe."
                    }
                    if (req.params.authorURL == 'shubharambh') {
                        seoData.title = 'Hetal Shah - ZeepZoop';
                        seoData.description = "Hetal Shah, a Lifestyle Blogger, Content Creator and Digital Marketer at ZeepZoop. Her blogs speak about art, design culture and many more."
                    }
                    if (req.params.authorURL == 'dhruvi-savsani') {
                        seoData.title = 'Dhruvi Savsani - ZeepZoop';
                        seoData.description = "Dhruvi Savsani, a fashion and lifestyle content writer at ZeepZoop."
                    }
                    if (req.params.authorURL == 'vanita-jain') {
                        seoData.title = 'Vanita Jain - ZeepZoop';
                        seoData.description = "Vanita Jain, multi-tasker and an avid traveller who loves to write about the fashion industry at ZeepZoop."
                    }
                    if (req.params.authorURL == 'bhavya-modi') {
                        seoData.title = 'Bhavya Modi - ZeepZoop';
                        seoData.description = "Bhavya Modi, Founder and CEO of ZeepZoop. Loves to write about technology, fashion, digital marketing."
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
        console.log("All Blog Page");
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
        console.log("Single Blog Page");
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
                        seodesc: req.params.url,
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