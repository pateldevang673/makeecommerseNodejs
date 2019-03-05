/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const FashionStoryController = require(APP_CONTROLLER_PATH + 'fashionstory');
let fashionstoryController = new FashionStoryController();

router.get('/', fashionstoryController.getSearch);
router.get('/:id', fashionstoryController.getSingleBlog);
router.get('/by/shanaya', fashionstoryController.SStory);

module.exports = router;