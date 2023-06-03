import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import data from '../data';

const login = (req:Request, res:Response) => {
  const { email, password } = req.body;

  const userInfo = data.filter((user) => (
    user.email === email
  )).filter((user) => (
    user.password === password
  ))[0];

  if (!userInfo) {
    res.status(403).json('no info');
  } else {
    try {
      const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_SECRET || '';
      const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_SECRET || '';

      const accessToken = jwt.sign({
        id: userInfo.id,
        username: userInfo.username,
        email: userInfo.email,
      }, ACCESS_TOKEN_KEY, {
        expiresIn: '1m',
        issuer: 'about Tech',
      });

      const refreshToken = jwt.sign({
        id: userInfo.id,
        username: userInfo.username,
        email: userInfo.email,
      }, REFRESH_TOKEN_KEY, {
        expiresIn: '24h',
        issuer: 'about Tech',
      });

      res.cookie('accessToken', accessToken, {
        secure: false,
        httpOnly: true,
      });

      res.cookie('refreshToken', refreshToken, {
        secure: false,
        httpOnly: true,
      });

      res.status(200).json('성공');
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default login;
