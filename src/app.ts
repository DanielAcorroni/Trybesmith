import express from 'express';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();

app.use(express.json());

app.use(productRoutes);

app.use(userRoutes);

app.use(orderRoutes);

export default app;
