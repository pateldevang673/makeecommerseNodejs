/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const FshopController = require(APP_CONTROLLER_PATH + 'fshop');
let fshopController = new FshopController();

// router.get('/:url', fshopController.getSingleBlog);
router.get('/', fshopController.getShops);


module.exports = router;