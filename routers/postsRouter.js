const express = require('express');
const postsController = require('../controllers/postsController');
const { identifier } = require('../middlewares/identification');
const router = express.Router();
const postController = require('../controllers/postsController');





router.get('/all-posts', postsController.getPosts);
router.get('/single-post', postsController.singlePost);
router.post('/create-post', identifier, postsController.createPost);

router.put('/update-post', identifier, postController.updatePost);
router.delete('/delete-post', identifier, postController.deletePost);


module.exports = router;