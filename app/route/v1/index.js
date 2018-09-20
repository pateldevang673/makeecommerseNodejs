/**
 * Created by crosp on 5/8/17.
 */
const express = require('express'),
    router = express.Router();
const ROUTE_V1_PATH = APP_ROUTE_PATH + "v1/";
router.use('/', require(ROUTE_V1_PATH + 'home'));
router.use('/blogs', require(ROUTE_V1_PATH + 'blog'));
router.use('/collection', require(ROUTE_V1_PATH + 'collection'));
router.use('/fshop', require(ROUTE_V1_PATH + 'fshop'));
router.use('/search', require(ROUTE_V1_PATH + 'search'));
router.use('/category', require(ROUTE_V1_PATH + 'categorystore'));
router.use('/catalouge', require(ROUTE_V1_PATH + 'catalouge'));
router.use('/brand', require(ROUTE_V1_PATH + 'storedetail'));


module.exports = router;