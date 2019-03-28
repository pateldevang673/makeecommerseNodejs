/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const HomeController = require(APP_CONTROLLER_PATH + 'home');
let homeController = new HomeController();

router.get('/', homeController.getSingleHome);
router.get('/reset/', homeController.resetPassword);
router.get('/partners', homeController.partners);
router.get('/profile/:id', homeController.userProfile);
router.get('/contactus', homeController.contactus);

// router.get('/zeepzoop_story', homeController.story);
// router.get('/register_your_brand', homeController.registerbrand);
// router.get('/bhavyamodi_founderceo', homeController.ceo);
// router.get('/zeepzoop_team', homeController.team);

router.get('/zeepzoop-story', homeController.story);
router.get('/register-your-brand', homeController.registerbrand);
router.get('/bhavyamodi-founderceo', homeController.ceo);
router.get('/zeepzoop-team', homeController.team);
router.get('/thank-you', homeController.thankyou);

module.exports = router;