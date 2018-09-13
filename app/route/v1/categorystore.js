/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const CategoryController = require(APP_CONTROLLER_PATH + 'categorystore');
let categoryController = new CategoryController();

// router.get('/:id', categoryController.getcategegorystore);
router.get('/:categoryName/:id', categoryController.getcategegorystore);
// router.get('/', collectionController.getBlogs);

module.exports = router;