/**
 * Created by crosp on 5/9/17.
 */
const BaseController = require(APP_CONTROLLER_PATH + 'base');
const CategoryHandler = require(APP_HANDLER_PATH + 'categorystore');
class CategoryController extends BaseController {
    constructor() {
        super();
        this._categoryHandler = new CategoryHandler();
        this._passport = require('passport');
    }

    getcategegorystore(req, res, next) {
        this._categoryHandler.getcategegorystore(req, res);
    }
    // getcategegorystore(req, res, next) {
    //     this._collectionHandler.getcategegorystore(req, res);
    // }
}

module.exports = CategoryController;