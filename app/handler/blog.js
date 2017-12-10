
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
            url: URLStore + '/blogs/search?startBlogs=0&endBlogs=9',
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
            res.render('blog', { title: 'blogs', page: 'blogs-page', blogs: JSON.parse(results)['data'], length: JSON.parse(results)['data'].length, titleURL: urlArray })
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
            res.render('detail', { title: 'blog-detail', page: 'detail-page', titleurl: req.params.url, blog: JSON.parse(results)['data'][0] })
        })
    }

}

module.exports = BlogHandler;