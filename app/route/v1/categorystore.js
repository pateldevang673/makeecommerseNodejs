/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const CategoryController = require(APP_CONTROLLER_PATH + 'categorystore');
let categoryController = new CategoryController();

// router.get('/:id', categoryController.getcategegorystore);
// router.get('/:categoryName/:id', categoryController.getcategegorystore);
router.get('/Clothing', categoryController.getClothingstore);
router.get('/Jewellery', categoryController.getJewellerystore);
router.get('/Accessories', categoryController.getAccessoriesstore);
router.get('/Home-Decor', categoryController.getHomedecorstore);


// "https://www.zeepzoop.com/category/Clothing/5a51e507ff645771bf57dc14?buisnessOffline=true"
// "https://www.zeepzoop.com/category/Clothing/"



module.exports = router;