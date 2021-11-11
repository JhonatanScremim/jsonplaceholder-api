import 'reflect-metadata';

import express, { json } from 'express';
import routes from './routes';
import '../typeorm';
import '@shared/container'

const app = express();

app.use(json());
app.use(routes);

app.listen(3336, () => {
    console.log('Server start in port 3336')
});
