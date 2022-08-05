import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProduct from '../interfaces/productInterface';
import IUser from '../interfaces/userInterface';

export default class SmithModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }


  public async registerProducts(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [response] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: response.insertId, ...product };
  }
}