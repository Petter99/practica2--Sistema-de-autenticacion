import 'dotenv/config'; // O bien: import dotenv from 'dotenv'; dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/router.js';

const app = express();
app.use(bodyParser.json());
app.use(router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});