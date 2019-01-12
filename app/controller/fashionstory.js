/**
 * Created by crosp on 5/9/17.
 */
const BaseController = require(APP_CONTROLLER_PATH + 'base');
const FashionStoryHandler = require(APP_HANDLER_PATH + 'fashionstory');
class FashionStoryController extends BaseController {
    constructor() {
        super();
        this._fashionstoryHandler = new FashionStoryHandler();
        this._passport = require('passport');
    }

    getSearch(req, res, next) {
        this._fashionstoryHandler.getSearch(req, res);
    }

    getSingleBlog(req, res, next) {
        this._fashionstoryHandler.getSingleBlog(req, res);
    }


}

module.exports = FashionStoryController;