/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const BlogController = require(APP_CONTROLLER_PATH + 'blog');
let blogController = new BlogController();

router.get('/:url', blogController.getSingleBlog);
router.get('/', blogController.getBlogs);


module.exports = router;
