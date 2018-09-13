/**
 * Created by crosp on 5/9/17.
 */
const BaseController = require(APP_CONTROLLER_PATH + 'base');
const CollectionHandler = require(APP_HANDLER_PATH + 'collection');
class CollectionController extends BaseController {
    constructor() {
        super();
        this._collectionHandler = new CollectionHandler();
        this._passport = require('passport');
    }

    getBlogs(req, res, next) {
        this._collectionHandler.getBlogs(req, res);
    }
    // getcategegorystore(req, res, next) {
    //     this._collectionHandler.getcategegorystore(req, res);
    // }
}

module.exports = CollectionController;