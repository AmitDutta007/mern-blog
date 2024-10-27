import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletepost, getPost, getposts, updatepost } from '../controllers/post.controller.js';


const router = express.Router();
router.post('/create', verifyToken, create)
router.get('/getPosts', getposts)
router.get('/getpost/:id', getPost);
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost)
router.put('/updatepost/:postId/:userId', verifyToken, updatepost)


export default router;