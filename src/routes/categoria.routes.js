import { Router } from "express";
import categoriaController from "../controllers/categoria.controller.js";

const categoriaRoutes = Router();

categoriaRoutes.post('/categorias', categoriaController.criarCategoria);

export default categoriaRoutes;