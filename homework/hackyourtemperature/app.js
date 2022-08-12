import express from 'express';
import router from './router.js';
const app = express();

//Middleware
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

export default app;