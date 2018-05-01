
/**
 * Created by crosp on 5/9/17.
 */
const ValidationError = require(APP_ERROR_PATH + 'validation');
const NotFoundError = require(APP_ERROR_PATH + 'not-found');
const BaseAutoBindedClass = require(APP_BASE_PACKAGE_PATH + 'base-autobind');
var request = require('request');
var url = require('url');

const URLStore = global.config.variable.apiPath;
var urlArray = []

class BlogHandler extends BaseAutoBindedClass {
    constructor() {
        super();
        this._validator = require('validator');
    }
    getBlogs(req, res) {
        var optionsStore = {
            url: URLStore + '/blogs/search?startBlogs=0&endBlogs=11',
            method: 'GET',
            headers: {
                'Authorization': "maximumvsminimumsecurity",
                'Content-Type': "application/json"
            }
        };
        return new Promise(function (resolve, reject) {
            request(optionsStore, function (error, response, body) {
                if (body != null) {
                    for (var i = 0; i < JSON.parse(body)['data'].length; i++) {
                        urlArray[i] = JSON.parse(body)['data'][i].title.trim().replace(/\s+/g, '-').toLowerCase()
                    }
                    resolve(body)
                } else
                    reject(new NotFoundError("blog not found"))
            });
        }).then((results) => {
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
            res.render('blog', { seo: true, seoData: seoData, page: 'blogs-page', blogs: JSON.parse(results)['data'], length: JSON.parse(results)['data'].length, titleURL: urlArray })
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
        return new Promise(function (resolve, reject) {
            request(optionsBlog, function (error, response, body) {
                resolve(body)
            });
        }).then((results) => {
            var blog = JSON.parse(results)['data'][0];

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

                res.render('detail', { seo: true, seoData: seoData, page: 'detail-page', titleurl: req.params.url, blog: blog, shareUrl: req.protocol + '://' + req.get('host') + req.originalUrl })
            } else {
                res.render('404', { seo: false, title: '404 page not found', page: '404-page' })
            }

        })
    }

}

module.exports = BlogHandler;