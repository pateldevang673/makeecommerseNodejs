/**
 * Created by crosp on 5/9/17.
 */
const BaseController = require(APP_CONTROLLER_PATH + 'base');
const BlogSearchHandler = require(APP_HANDLER_PATH + 'blogsearch');
class BlogSearchController extends BaseController {
    constructor() {
        super();
        this._blogsearchHandler = new BlogSearchHandler();
        this._passport = require('passport');
    }

    getBlogSearch(req, res, next) {
        this._blogsearchHandler.getBlogSearch(req, res);
    }
}

module.exports = BlogSearchController;