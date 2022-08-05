import { Router } from 'express';
import SmithController from '../controllers/smithController';

const router = Router();

const controller = new SmithController();

router.get('/orders', controller.getAllOrders);

export default router;