/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const UserSearchController = require(APP_CONTROLLER_PATH + 'users');
let usersearchController = new UserSearchController();

router.get('/', usersearchController.getUserSearch);

module.exports = router;