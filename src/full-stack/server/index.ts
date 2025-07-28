import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
 
const app = express();
const port = 3333;

app.use(cors());
app.use(morgan('short'));
app.use(express.json());

type Item = {
  id: string;
  text: string;
  completed: boolean;
};

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.get('/items', (_, res) => {
  //
});

app.post('/items', (req, res) => {
  // 
});

app.patch('/items/:id', (req, res) => {
  // 
});

app.delete('/items/:id', (req, res) => {
  //
});

app.listen((port), () => {
  console.log(`Server running on http://localhost:${port}`);
});
