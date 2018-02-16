/**
 * Created by crosp on 5/9/17.
 */
const BaseController = require(APP_CONTROLLER_PATH + 'base');
const HomeHandler = require(APP_HANDLER_PATH + 'home');
class HomeController extends BaseController {
    constructor() {
        super();
        this._homeHandler = new HomeHandler();
        this._passport = require('passport');
    }

    getSingleHome(req, res, next) {
        this._homeHandler.getSingleHome(req, res);
    }

    resetPassword(req, res, next) {
        this._homeHandler.resetPassword(req, res);
    }

    business(req, res, next) {
        this._homeHandler.business(req, res);
    }

}

module.exports = HomeController;