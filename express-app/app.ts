import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import login from './controllers/login';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.post('/login', login);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}`);
});
