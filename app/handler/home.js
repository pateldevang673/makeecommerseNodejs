
/**
 * Created by crosp on 5/9/17.
 */
const ValidationError = require(APP_ERROR_PATH + 'validation');
const NotFoundError = require(APP_ERROR_PATH + 'not-found');
const BaseAutoBindedClass = require(APP_BASE_PACKAGE_PATH + 'base-autobind');
var request = require('request');
var Promise = require('promise');        
const URLStore = global.config.variable.apiPath;
var urlArray=[]

class HomeHandler extends BaseAutoBindedClass {
    constructor() {
        super();
        this._validator = require('validator');
    }
    getSingleHome(req,res, callback) {    
        // var URLStore = URLStore+'/blogs/search?startBlogs=0&endBlogs=9';
        var optionsStore = {
            url: URLStore+'/blogs/search?startBlogs=0&endBlogs=2',
            method: 'GET',
            // headers: req.headers,
            headers: {
                'Authorization' :"maximumvsminimumsecurity",
                'Content-Type' :"application/json"
            }
        };          
        return new Promise(function(resolve, reject) {
            request(optionsStore, function (error, response, body) {
                if(body != null){
                    for(var i=0;i<JSON.parse(body)['data'].length;i++){
                        urlArray[i] = JSON.parse(body)['data'][i].title.trim().replace(/\s+/g, '-').toLowerCase()
                    }
                    resolve(body)
                }else    
                    reject(new NotFoundError("blog not found"))
            });
        }).then((results) => {
            res.render('index',{title:'ZeepZoop',page:'home-page',blogs:JSON.parse(results)['data'],length:JSON.parse(results)['data'].length,titleURL:urlArray})

        })
        // this.requestAsync(req, 'http://' + req.get('host') + '/stores/trendingstore' + queryString, 'trendingStores'),
    }

}

module.exports = HomeHandler;