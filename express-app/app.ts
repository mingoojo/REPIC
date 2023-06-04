import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

import posts from './posts';

dotenv.config();

const port = process.env.PORT;
const app = express();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || '';

// 미들웨어 사용
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true,
}));

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.get('/', (req, res) => {
  res.json('hihi');
});

app.post('/login', (req, res) => {
  const { id, password } = req.body;
  // const user = {
  //   id, password,
  // };
  // res.send({ user });
  // const { username } = req.body;
  const user = { name: id, key: password };
  const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
