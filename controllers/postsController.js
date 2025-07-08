const Posts = require('../models/postsModel');


exports.getPosts = async (req, res) => {
    const {page} = req.query;
    const postsPerPage = 10;

    try {
        let pageNum = 0;
        if(page <= 1){
            pageNum = 0
        }else{
            pageNum = page - 1
        }
        const result = await Posts.find()
        .sort({createdAt: -1})
        .skip(pageNum * postsPerPage)
        .limit(postsPerPage)
        .populate({
            path: 'userId',
            select: 'email',
    });
    res.status(200).json({ success: true, message: 'posts', date: result });
    } catch (error) {
        console.log(error);
    }
};

exports.createPost = async(req, res)=> {
    const { title, description } = req.body;
    const {userId} = req.user;

    try {

    } catch (error) {
        console.log(error);
    }
};