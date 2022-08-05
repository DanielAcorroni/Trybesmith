import { Router } from 'express';
import SmithController from '../controllers/smithController';
import registerUserValidation from '../middlewares/registerUserValidation';

const router = Router();

const controller = new SmithController();

router.post('/users', registerUserValidation, controller.registerUser);

export default router;