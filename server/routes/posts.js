import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
//patch updates existing documents
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
//for liking the post
router.patch('/:id/likePost', likePost)

export default router;