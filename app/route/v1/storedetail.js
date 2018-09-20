/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const SdetailController = require(APP_CONTROLLER_PATH + 'storedetail');
let sdetailController = new SdetailController();

router.get('/:url', sdetailController.getSingleStore);

module.exports = router;