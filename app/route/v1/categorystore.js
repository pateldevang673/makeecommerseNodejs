/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const CategoryController = require(APP_CONTROLLER_PATH + 'categorystore');
let categoryController = new CategoryController();

// router.get('/:id', categoryController.getcategegorystore);
// router.get('/:categoryName/:id', categoryController.getcategegorystore);
router.get('/clothing', categoryController.getClothingstore);
router.get('/jewellery', categoryController.getJewellerystore);
router.get('/accessories', categoryController.getAccessoriesstore);
router.get('/home-decor', categoryController.getHomedecorstore);


module.exports = router;