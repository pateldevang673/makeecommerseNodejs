/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const storeCollectionController = require(APP_CONTROLLER_PATH + 'search');
let searchController = new storeCollectionController();
// router.get('/:url', searchController.getSingleBlog);
router.get('/', searchController.getSearch);

module.exports = router;