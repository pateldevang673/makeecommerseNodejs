/**
 * Created by crosp on 5/8/17.
 */
const express = require('express'),
    router = express.Router();
const ROUTE_V1_PATH = APP_ROUTE_PATH + "v1/";
router.use('/blogs', require(ROUTE_V1_PATH + 'blog'));
router.use('/details', require(ROUTE_V1_PATH + 'detail'));
router.use('/', require(ROUTE_V1_PATH + 'home'));

module.exports = router;        