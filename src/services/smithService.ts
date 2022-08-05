import connection from '../models/connection';
import SmithModel from '../models/smithModel';
import IProduct from '../interfaces/productInterface';
import IUser from '../interfaces/userInterface';

export default class SmithService {
  public model: SmithModel;

  public async getAllProducts(): Promise<IProduct[]> {
    const productsReponse = await this.model.getAllProducts();
    return productsReponse;
  }

  public async registerProducts(product: IProduct): Promise<IProduct> {
    const registerProdResponse = await this.model.registerProducts(product);
    return registerProdResponse;
  }

  public async registerUser(user: IUser): Promise<IUser> {
    const registerUserResponse = await this.model.registerUser(user);
    return registerUserResponse;
  }
}