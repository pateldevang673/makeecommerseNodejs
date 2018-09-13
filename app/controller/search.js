/**
 * Created by crosp on 5/9/17.
 */
const BaseController = require(APP_CONTROLLER_PATH + 'base');
const SearchHandler = require(APP_HANDLER_PATH + 'search');
class SearchController extends BaseController {
    constructor() {
        super();
        this._searchHandler = new SearchHandler();
        this._passport = require('passport');
    }

    getSearch(req, res, next) {
        this._searchHandler.getSearch(req, res);
    }


}

module.exports = SearchController;