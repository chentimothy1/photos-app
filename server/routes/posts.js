import express from 'express';

import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
//patch updates existing documents
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)

export default router;