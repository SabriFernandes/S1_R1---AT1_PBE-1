import { Router } from "express";
import categoriaController from "../controllers/produto.controller.js";

const produtoRoutes = Router();

categoriaRoutes.post('/produtos', produtoController.criarProduto);
categoriaRoutes.get('/produtos', produtoController.listarProduto);
categoriaRoutes.put('/produtos/:idProduto', produtoController.atualizarProduto);
categoriaRoutes.delete('/produtos:idProduto', produtoController.deletarProduto); 

export default produtoRoutes;
