import categoriaModel from "../models/categoriasModels.js";
import produtoModel from "../models/produtosModels.js";

const produtoController = {

    criarProduto: async (req, res) => {
        try {

            const {  idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad } = req.body;

            if ( idCategoria || nomeProduto || valorProduto || vinculoImagem || dataCad) {
                return res.status(400).json({ erro: 'Campo obrigatório não preenchido' });
            }

            await categoriaModel.insert(descricaoCategoria);

            res.status(201).json({ message: 'Categoria cadastrada com sucesso' });

        } catch (error) {
            console.error('Erro ao cadastrar categoria', error);
            res.status(500).json({ erro: 'Erro ao criar uma categoria!' });
        }
    },
}
