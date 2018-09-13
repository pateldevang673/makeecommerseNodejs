/**
 * Created by crosp on 5/9/17.
 */
const BaseController = require(APP_CONTROLLER_PATH + 'base');
const SdetailHandler = require(APP_HANDLER_PATH + 'storedetail');
class SdetailController extends BaseController {
    constructor() {
        super();
        this._sdetailHandler = new SdetailHandler();
        this._passport = require('passport');
    }

    getSingleStore(req, res, next) {
        this._sdetailHandler.getSingleStore(req, res);
    }
}

module.exports = SdetailController;