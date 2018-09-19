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

    getClothingstore(req, res, next) {
        this._categoryHandler.getClothingstore(req, res);
    }

    getJewellerystore(req, res, next) {
        this._categoryHandler.getJewellerystore(req, res);
    }

    getAccessoriesstore(req, res, next) {
        this._categoryHandler.getAccessoriesstore(req, res);
    }

    getHomedecorstore(req, res, next) {
        this._categoryHandler.getHomedecorstore(req, res);
    }
}

module.exports = CategoryController;