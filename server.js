import express from "express";
import categoriaRoutes from "./src/routes/categoria.routes.js";
import 'dotenv/config';

const app = express();
const PORT = process.env.SERVER_PORT || 8081;

app.use(express.json());

app.use('/', categoriaRoutes);

app.listen(8000, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
