const express = require('express');
const { identifier } = require('../middlewares/identification');
const router = express.Router();
const postsController = require('../controllers/postsController');





router.get('/all-post', postsController.getPosts);
//router.get('/single-post', authController.signin);
//router.post('/create-post', identifier, authController.signout);

//router.put('/update-post', identifier, authController.sendVerificationCode);
//router.delete('/delete-post', identifier, authController.verifyVerificationCode);


module.exports = router;