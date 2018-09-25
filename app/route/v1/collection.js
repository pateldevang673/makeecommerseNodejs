/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const CollectionController = require(APP_CONTROLLER_PATH + 'collection');
let collectionController = new CollectionController();

router.get('/:url', collectionController.getBlogs);
// router.get('/:categoryName/:id', collectionController.getcategegorystore);
// router.get('/', collectionController.getBlogs);

module.exports = router;