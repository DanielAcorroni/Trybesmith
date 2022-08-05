import { Router } from 'express';
import SmithController from '../controllers/smithController';
import registerProdValidation from '../middlewares/registerProdValidation';

const router = Router();

const controller = new SmithController();

router.get('/products', controller.getAllProducts);

router.post('/products', registerProdValidation, controller.registerProducts);

export default router;