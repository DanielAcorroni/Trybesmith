import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import IUser from '../interfaces/userInterface';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig = {
  expiresIn: '1d',
};

const generateJWT = (user: IUser) => {
  const { password: passDB, ...userWithNoPassword } = user;
  const token = jwt.sign({ data: userWithNoPassword }, secret, jwtConfig);
  return token;
};

export default generateJWT;