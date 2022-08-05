import { NextFunction, Request, Response } from 'express';

const validateUsername = (username: string) => {
  let usernameError = null;
  if (username === undefined) {
    usernameError = { status: 400, message: 'Username is required' };
    return usernameError;
  }
  if (typeof username !== 'string') {
    usernameError = { status: 422, message: 'Username must be a string' };
    return usernameError;
  }
  if (username.length < 3) {
    usernameError = { status: 422, message: 'Username must be longer than 2 characters' };
    return usernameError;
  }
  return usernameError;
};

const validateClasse = (classe: string) => {
  let classeError = null;
  if (classe === undefined) {
    classeError = { status: 400, message: 'Classe is required' };
    return classeError;
  }
  if (typeof classe !== 'string') {
    classeError = { status: 422, message: 'Classe must be a string' };
    return classeError;
  }
  if (classe.length < 3) {
    classeError = { status: 422, message: 'Classe must be longer than 2 characters' };
    return classeError;
  }
  return classeError;
};

const validateLevel = (level: number) => {
  let levelError = null;
  if (level === undefined) {
    levelError = { status: 400, message: 'Level is required' };
    return levelError;
  }
  if (typeof level !== 'number') {
    levelError = { status: 422, message: 'Level must be a number' };
    return levelError;
  }
  if (level < 1) {
    levelError = { status: 422, message: 'Level must be greater than 0' };
    return levelError;
  }
  return levelError;
};

const validatePassword = (password: string) => {
  let passwordError = null;
  if (password === undefined) {
    passwordError = { status: 400, message: 'Password is required' };
    return passwordError;
  }
  if (typeof password !== 'string') {
    passwordError = { status: 422, message: 'Password must be a string' };
    return passwordError;
  }
  if (password.length < 8) {
    passwordError = { status: 422, message: 'Password must be longer than 7 characters' };
    return passwordError;
  }
  return passwordError;
};

const registerUserValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;
  const usernameError = validateUsername(username);
  const classeError = validateClasse(classe);
  const levelError = validateLevel(level);
  const passwordError = validatePassword(password);
  if (usernameError) {
    return res.status(usernameError.status).json({ error: usernameError.message });
  }
  if (classeError) {
    return res.status(classeError.status).json({ error: classeError.message });
  }
  if (levelError) {
    return res.status(levelError.status).json({ error: levelError.message });
  }
  if (passwordError) {
    return res.status(passwordError.status).json({ error: passwordError.message });
  }
  next();
};

export default registerUserValidation;