import { Request, Response } from 'express';
import generateJWT from '../auth/generateJWT';
import SmithService from '../services/smithService';

export default class SmithController {
  constructor(private service = new SmithService()) { }


  public registerProducts = async (req: Request, res: Response) => {
    const product = req.body;
    const registerProdResponse = await this.service.registerProducts(product);
    return res.status(201).json(registerProdResponse);
  };
}