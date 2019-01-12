/**
 * Created by crosp on 5/9/17.
 */
const BaseController = require(APP_CONTROLLER_PATH + 'base');
const UserSearchHandler = require(APP_HANDLER_PATH + 'users');
class UserSearchController extends BaseController {
    constructor() {
        super();
        this._usersearchHandler = new UserSearchHandler();
        this._passport = require('passport');
    }

    getUserSearch(req, res, next) {
        this._usersearchHandler.getUserSearch(req, res);
    }
}

module.exports = UserSearchController;