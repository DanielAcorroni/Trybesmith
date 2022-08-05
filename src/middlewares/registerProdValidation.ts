import { NextFunction, Request, Response } from 'express';

const validateName = (name: string) => {
  let nameError = null;
  if (name === undefined) {
    nameError = { status: 400, message: 'Name is required' };
    return nameError;
  }
  if (typeof name !== 'string') {
    nameError = { status: 422, message: 'Name must be a string' };
    return nameError;
  }
  if (name.length < 3) {
    nameError = { status: 422, message: 'Name must be longer than 2 characters' };
    return nameError;
  }
  return nameError;
};

const validateAmount = (amount: string) => {
  let amountError = null;
  if (amount === undefined) {
    amountError = { status: 400, message: 'Amount is required' };
    return amountError;
  }
  if (typeof amount !== 'string') {
    amountError = { status: 422, message: 'Amount must be a string' };
    return amountError;
  }
  if (amount.length < 3) {
    amountError = { status: 422, message: 'Amount must be longer than 2 characters' };
    return amountError;
  }
  return amountError;
};

const registerProdValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const nameError = validateName(name);
  const amountError = validateAmount(amount);
  if (nameError) {
    return res.status(nameError.status).json({ error: nameError.message });
  }
  if (amountError) {
    return res.status(amountError.status).json({ error: amountError.message });
  }
  next();
};

export default registerProdValidation;