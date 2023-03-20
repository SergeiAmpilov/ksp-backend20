import express from 'express';
import { pagesRouter } from './routes/routes';
import mongoose from 'mongoose';

const app = express();
const {PORT = 3000} =  process.env;

mongoose.set('strictQuery', false);


app.use(pagesRouter);


async function start() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/kspdb');
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT} !`)
    });
  } catch (e) {
    console.log(`Error ${e}`);
  }
}

start();