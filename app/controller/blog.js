/**
 * Created by crosp on 5/9/17.
 */
const BaseController = require(APP_CONTROLLER_PATH + 'base');
const BlogHandler = require(APP_HANDLER_PATH + 'blog');
class BlogController extends BaseController {
    constructor() {
        super();
        this._blogHandler = new BlogHandler();
        this._passport = require('passport');
    }

    getBlogs(req, res, next) {
        this._blogHandler.getBlogs(req,res, this._responseManager.getDefaultResponseHandler(res));
    }

    getSingleBlog(req, res, next) {
        this._blogHandler.getSingleBlog(req,res, this._responseManager.getDefaultResponseHandler(res));
    }
}

module.exports = BlogController;