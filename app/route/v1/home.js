/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const HomeController = require(APP_CONTROLLER_PATH + 'home');
let homeController = new HomeController();

router.get('/', homeController.getSingleHome);

module.exports = router;
