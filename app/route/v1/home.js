/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const HomeController = require(APP_CONTROLLER_PATH + 'home');
let homeController = new HomeController();

router.get('/', homeController.getSingleHome);
router.get('/reset/', homeController.resetPassword);
router.get('/business/', homeController.business);
router.get('/team', homeController.team);
router.get('/partners', homeController.partners);
router.get('/profile/:id', homeController.userProfile);
router.get('/our_story', homeController.story);
router.get('/contactus', homeController.contactus);
router.get('/brand_reg', homeController.registerbrand);
router.get('/ceo', homeController.ceo);
// router.get('/:cityName', homeController.getSingleHome);

module.exports = router;