import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() });

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// /posts/123
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post exists with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post exists with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post has been deleted successfully' });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    //check to see if the user is authenticated via middleware
    if (!req.userId) return res.json({ message: "Not authenticated" });

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post exists with that id');

    const post = await PostMessage.findById(id);

    //limit each person to 1 like
    const index = post.likes.findIndex((id) => id === String(req.userId));

    //if user wants to like the post
    if (index === -1) {
        //like the post
        post.likes.push(req.userId);
    } else {
        // unlike
        //returns array of likes without this specific user's likes
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true })

    res.json(updatedPost);
}