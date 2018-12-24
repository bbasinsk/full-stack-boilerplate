import { Router } from 'express';
import recipes from '../controllers/recipes';

const router = new Router();

router.get('/recipes', recipes.list);

export default router;
