import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import sampleRoutes from './routes/sample';

const NAMESPACE = 'Server';
const app = express();

/** Logging request */

app.use((req, res, next) => {
  logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
  }); // finish response ------------------ req.socket.remoteAddress

  next();
});

/** Parse request */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Rules of our API */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // --------------
  res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // --------------

  if (req.method == 'options') {
    res.header('Acces-Control');
    return res.status(200).json({});
  }
  next();
});

/** Routes */
app.use('/sample', sampleRoutes);

/** Error Handling */
app.use((req, res, next) => {
  const error = new Error('not found'); // ----------
  return res.status(404).json({
    message: error.message
  });
  next();
});

app.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}: ${config.server.port}`));
// const httpServer = http.createServer(router); //-----------
// httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}: ${config.server.port}`));
