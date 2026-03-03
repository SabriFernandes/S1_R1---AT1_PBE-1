// Importa o Router do Express
import { Router } from "express";

import categoriaController from "../controllers/categoria.controller.js";// Importa o controller da categoria
const categoriaRoutes = Router();// Cria as rotas da categoria
categoriaRoutes.post('/categorias', categoriaController.criarCategoria);// Rota para criar uma nova categoria
categoriaRoutes.get('/categorias', categoriaController.listarCategoria);// Rota para listar todas as categorias
categoriaRoutes.put('/categorias/:idCategoria', categoriaController.atualizarCategoria);// Rota para atualizar uma categoria pelo id
categoriaRoutes.delete('/categorias/:idCategoria', categoriaController.deletarCategoria);// Rota para deletar uma categoria pelo id


export default categoriaRoutes;

