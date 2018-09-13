/**
 * Created by crosp on 5/9/17.
 */
const BaseController = require(APP_CONTROLLER_PATH + 'base');
const CatalougeHandler = require(APP_HANDLER_PATH + 'catelouge');
class CatalougeController extends BaseController {
    constructor() {
        super();
        this._catalougeHandler = new CatalougeHandler();
        this._passport = require('passport');
    }

    getcatalouge(req, res, next) {
        this._catalougeHandler.getcatalouge(req, res);
    }

}

module.exports = CatalougeController;