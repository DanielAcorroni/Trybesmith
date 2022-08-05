import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProduct from '../interfaces/productInterface';
import IUser from '../interfaces/userInterface';

export default class SmithModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders() {
    const queryPt1 = 'SELECT o.*, CONCAT(\'[\',GROUP_CONCAT(p.id),\']\') AS products';
    const queryPt2 = 'FROM Trybesmith.Orders AS o';
    const queryPt3 = 'LEFT JOIN Trybesmith.Products AS p ON p.orderId = o.id';
    const queryPt4 = 'GROUP BY o.id ORDER BY o.userId;';
    const query = `${queryPt1} ${queryPt2} ${queryPt3} ${queryPt4}`;
    const [response] = await this.connection.execute<RowDataPacket[]>(query);
    return response;
  }

  public async getAllProducts(): Promise<IProduct[]> {
    const [response] = await this.connection.execute('SELECT * FROM Trybesmith.Products;');
    return response as IProduct[];
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

  public async registerUser(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const [response] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id: response.insertId, ...user };
  }
}