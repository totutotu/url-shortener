import http from 'http';
import { app } from './app';
import { connectToDb } from './data-source';

const startServer = async () => {
    await connectToDb();
    const port = process.env.PORT ?? 3006;

    http.createServer(app).listen(port);
};

startServer();
