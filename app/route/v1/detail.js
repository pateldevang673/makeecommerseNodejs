/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const DetailController = require(APP_CONTROLLER_PATH + 'detail');
let detailController = new DetailController();

router.get('/', detailController.getSingleDetail);

module.exports = router;
