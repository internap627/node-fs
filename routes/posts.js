const express = require('express')
const router = express.Router()
const Post = require('../models/Post')


//Create new post
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({message: err})
    })
})

//Get all posts
router.get('/', async (req,res) => {
   
   try { const posts = await Post.find()
    res.json(posts)
}
    catch(err) {
        res.json({message: err})
    }
})

//Get one post
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }
    catch (err) {
        res.json({message: err})
    }
})

//Delete post
router.delete('/:postId', async (req, res) => {
    try{
        const deletedPost = await Post.remove({_id: req.params.postId})
        res.json(deletedPost)
    }
    catch (err) {
        res.json({message: err})
    }
})



module.exports = router

