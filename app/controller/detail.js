/**
 * Created by crosp on 5/9/17.
 */
const BaseController = require(APP_CONTROLLER_PATH + 'base');
const DetailHandler = require(APP_HANDLER_PATH + 'detail');
class DetailController extends BaseController {
    constructor() {
        super();
        this._detailHandler = new DetailHandler();
        this._passport = require('passport');
    }

    getSingleDetail(req, res, next) {
        this._detailHandler.getSingleDetail(req,res, this._responseManager.getDefaultResponseHandler(res));
    }
}

module.exports = DetailController;