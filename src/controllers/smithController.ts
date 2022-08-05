import { Request, Response } from 'express';
import generateJWT from '../auth/generateJWT';
import SmithService from '../services/smithService';

export default class SmithController {
  constructor(private service = new SmithService()) { }

  public getAllOrders = async (_req: Request, res: Response) => {
    const ordersResponse = await this.service.getAllOrders();
    return res.status(200).json(ordersResponse);
  };

  public getAllProducts = async (_req: Request, res: Response) => {
    const productsResponse = await this.service.getAllProducts();
    return res.status(200).json(productsResponse);
  };

  public registerProducts = async (req: Request, res: Response) => {
    const product = req.body;
    const registerProdResponse = await this.service.registerProducts(product);
    return res.status(201).json(registerProdResponse);
  };

  public registerUser = async (req: Request, res: Response) => {
    const user = req.body;
    const registerUserResponse = await this.service.registerUser(user);
    const JWTtoken = generateJWT(registerUserResponse);
    return res.status(201).json({ token: JWTtoken });
  };
}