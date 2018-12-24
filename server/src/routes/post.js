import { Router } from 'express';
import posts from '../controllers/posts';

const router = new Router();

router.get('/posts', posts.list);
router.post('/post', posts.create);

export default router;
