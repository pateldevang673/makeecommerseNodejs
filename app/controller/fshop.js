const BaseController = require(APP_CONTROLLER_PATH + 'base');
const FshopController = require(APP_HANDLER_PATH + 'fshop');
class BlogController extends BaseController {
    constructor() {
        super();
        this._fshopHandler = new FshopController();
        this._passport = require('passport');
    }

    getShops(req, res, next) {
        this._fshopHandler.getShops(req, res);
    }

    getSingleBlog(req, res, next) {
        this._fshopHandler.getSingleBlog(req, res);
    }
}

module.exports = FshopController;