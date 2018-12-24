import { Router } from 'express';

const router = new Router();

router.get('/status', (req, res) => {
  res.status(200).send('Success');
});

router.get('/html', (req, res) => {
  res.status(200).send('<h1>Some HTML</h1>');
});

export default router;
