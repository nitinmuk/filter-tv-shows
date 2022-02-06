import express from 'express';
import bunyan from 'bunyan';
import router from './rest/router';
import parserErrorMiddleware from './component/middleware/parser.error.middleware';
import bodyParser from 'body-parser';

const logger = bunyan.createLogger({name: 'server'});

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);
app.use(parserErrorMiddleware);

app.listen(PORT, () => {
  logger.info(`API server listening on port ${PORT}!`);
});
