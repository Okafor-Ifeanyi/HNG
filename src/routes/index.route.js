import { Router } from 'express';
import { getTask } from '../controllers/task.controller.js'
const router = Router();

router.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'Server ok' });
 });

 router.get('/', getTask)

export default router;
