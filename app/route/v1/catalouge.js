/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const CatalougeController = require(APP_CONTROLLER_PATH + 'catelouge');
let catalougeController = new CatalougeController();

router.get('/', catalougeController.getcatalouge);


module.exports = router;