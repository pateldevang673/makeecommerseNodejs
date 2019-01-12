/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const BlogSearchController = require(APP_CONTROLLER_PATH + 'blogsearch');
let blogsearchController = new BlogSearchController();
// router.get('/:url', searchController.getSingleBlog);
router.get('/', blogsearchController.getBlogSearch);

module.exports = router;