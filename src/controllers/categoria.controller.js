import categoriaModel from "../models/categoria.model.js";

const categoriaController = {

    criarCategoria: async (req, res) => {
        try {

            const { descricaoCategoria } = req.body;

            if (!descricaoCategoria) {
                return res.status(400).json({ erro: 'Campo obrigatório não preenchido' });
            }

            await categoriaModel.insert(descricaoCategoria);

            res.status(201).json({ message: 'Categoria cadastrada com sucesso' });

        } catch (error) {
            console.error('Erro ao cadastrar categoria', error);
            res.status(500).json({ erro: 'Erro ao criar uma categoria!' });
        }
    }

}

export default categoriaController;