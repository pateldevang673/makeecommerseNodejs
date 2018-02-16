/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const HomeController = require(APP_CONTROLLER_PATH + 'home');
let homeController = new HomeController();

router.get('/', homeController.getSingleHome);
router.get('/reset/', homeController.resetPassword);
router.get('/business/', homeController.business);

module.exports = router;
