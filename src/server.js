import express from "express";
import categoriaRoutes from "./routes/categoria.routes.js";
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use('/', categoriaRoutes);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.SERVER_PORT}`);
});