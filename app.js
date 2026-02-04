import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config()
import { connectMDB } from "./database/config.database.js";
import { saveCurrency } from "./services/save_currency_db.service.js";
import homeRouter from './routes/home.router.js';

//! я створював у монго базу = restsdb і коллекцію = restapis

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(morgan('dev'));

await connectMDB();

await saveCurrency();

app.use('/', homeRouter);

app.use((req, res)=> {
  res.status(404).send('page not found | 404')
})

app.listen(PORT, ()=> {
  console.log(`⭐ server starting at http://localhost:${PORT}`);
})

