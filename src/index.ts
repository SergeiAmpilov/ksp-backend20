import express from 'express';
import { pagesRouter } from './routes/routes';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'


dotenv.config();
const app = express();


const {PORT = 3000} =  process.env;
const { DB_HOST = '127.0.0.1' } = process.env;
const { DB_PORT = '27017' } = process.env;
const { DB_NAME = 'kspdb' } = process.env;

mongoose.set('strictQuery', false);

app.use(pagesRouter);

async function start() {
  try {
    await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT} !`)
    });
  } catch (e) {
    console.log(`Error ${e}`);
  }
}

start();