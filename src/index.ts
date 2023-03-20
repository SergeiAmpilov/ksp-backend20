import express from 'express';
import { pagesRouter } from './routes/routes';
// import mongoose from 'mongoose';

const app = express();
const {PORT = 3000} =  process.env;


app.use(pagesRouter);


async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT} !`)
    });
  } catch (e) {
    console.log(`Error ${e}`);
  }
}

start();