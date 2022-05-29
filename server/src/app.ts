import express from 'express';
import urlRoutes from './routes/urlRoutes';
import shortUrlRoutes from './routes/shortUrlRoutes';
import clicksRoutes from './routes/clicksRoutes';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    next();
});

app.get('/ping', (_req, res) => {
    res.send('pong');
});

app.use('/api/urls', urlRoutes);
app.use('/api/clicks', clicksRoutes);

app.use('/', shortUrlRoutes);
