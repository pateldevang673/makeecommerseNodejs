/**
 * Created by crosp on 5/8/17.
 */
const router = require('express').Router();
const BlogController = require(APP_CONTROLLER_PATH + 'blog');
let blogController = new BlogController();

router.get('/:url', blogController.getSingleBlog);
router.get('/', blogController.getBlogs);
router.get('/author/:authorURL', blogController.getAuthorBlogs);
router.get('/auther/:authorURL', blogController.getAuthorBlogs);


module.exports = router;