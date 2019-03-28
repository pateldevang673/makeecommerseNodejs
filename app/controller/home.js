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

    // business(req, res, next) {
    //     this._homeHandler.business(req, res);
    // }

    team(req, res, next) {
        this._homeHandler.team(req, res);
    }

    partners(req, res, next) {
        this._homeHandler.partners(req, res);
    }

    userProfile(req, res, next) {
        this._homeHandler.userProfile(req, res);
    }

    story(req, res, next) {
        this._homeHandler.story(req, res);
    }

    contactus(req, res, next) {
        this._homeHandler.contactus(req, res);
    }

    ceo(req, res, next) {
        this._homeHandler.ceo(req, res);
    }

    registerbrand(req, res, next) {
        this._homeHandler.registerbrand(req, res);
    }

    thankyou(req, res, next) {
        this._homeHandler.thankyou(req, res);
    }

}

module.exports = HomeController;