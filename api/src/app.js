import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';

import './database';

class App  {
  constructor() {
    this.server = express();

    this.middlewares();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use('/api', routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      return res.status(500).json(err);
    })
  }
}

export default new App().server;
