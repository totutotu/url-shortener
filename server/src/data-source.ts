import { DataSource } from 'typeorm';
import Url from './models/Url';
import Click from './models/Click';
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'test') {
    dotenv.config({ path: './.env.test' });
} else if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

export const dataBaseConnection = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [Url, Click],
    subscribers: [],
    migrations: ['migrations/*.ts'],
})

export const connectToDb = async () => {
    try {
        await dataBaseConnection.initialize();
        console.log('connected to db!');
    } catch (e: unknown) {
        console.log('Error connecting to database: ', e);
        console.log('Exiting');
        process.exit(1);
    }
};


