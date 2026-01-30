import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config()

import homeRouter from './routes/home.router.js';

const app = express();
const PORT = process.env.PORT || 3500;
const API_BANK = process.env.API_BANK;

app.use(express.json());
app.use(morgan('dev'));

app.use('/', homeRouter);

app.use((req, res)=> {
  res.status(404).send('page not found | 404')
})

app.listen(PORT, ()=> {
  console.log(`⭐ server starting at http://localhost:${PORT}`);
})

