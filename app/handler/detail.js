
/**
 * Created by crosp on 5/9/17.
 */
const ValidationError = require(APP_ERROR_PATH + 'validation');
const NotFoundError = require(APP_ERROR_PATH + 'not-found');
const BaseAutoBindedClass = require(APP_BASE_PACKAGE_PATH + 'base-autobind');
var request = require('request');
const URLStore = global.config.variable.apiPath;

class DetailHandler extends BaseAutoBindedClass {
    constructor() {
        super();
        this._validator = require('validator');
    }
    getSingleDetail(req,res, callback) {  
        var URLStore = URLStore + '/blogs/search?URL=https://www.zeepzoop.com/blogs/jmkljkljsdfm-jdlfjljjjklkjlkj8';
        var optionsStore = {
            url: URLStore,
            method: 'GET',
            // headers: req.headers,
            headers: {
                'Authorization' :"maximumvsminimumsecurity",
                'Content-Type' :"application/json"
            }
        };   

        return new Promise(function(resolve, reject) {
            res.render('detail',{title:'blog-detail',page:'detail-page'})
        }).then((results) => {
            // console.log(results)
            // //res.render('detail',{title:'blogdetails'})
            // res.render('detail',{title:'blog-detail',page:'detail-page',blogdetails:JSON.parse(results)['data']})

        })
        
        
        // this.requestAsync(req, 'http://' + req.get('host') + '/stores/trendingstore' + queryString, 'trendingStores'),
    }

}

module.exports = DetailHandler;