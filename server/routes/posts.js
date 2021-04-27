import express from 'express';
//middleware
// add it before specific actions - to create a post you need to be logged in
import auth from '../middleware/auth.js';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
//patch updates existing documents
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)
//for liking the post
router.patch('/:id/likePost', auth, likePost)

export default router;