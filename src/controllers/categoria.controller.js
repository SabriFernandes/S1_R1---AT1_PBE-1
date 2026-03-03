// Importa o model (onde ficam as funções do banco)
import categoriaModel from "../models/categoria.model.js";

const categoriaController = {

    // Criar uma nova categoria
    criarCategoria: async (req, res) => {
        try {

            // Pega a descrição enviada no body
            const { descricaoCategoria } = req.body;

            // Verifica se foi preenchido
            if (descricaoCategoria == undefined) {
                return res.status(400).json({ erro: 'Campo obrigatório não preenchido' });
            }

            // Salva no banco
            await categoriaModel.insert(descricaoCategoria);

            // Retorna sucesso
            res.status(201).json({ message: 'Categoria cadastrada com sucesso' });

        } catch (error) {
            // Se der erro
            res.status(500).json({ erro: 'Erro ao criar categoria' });
        }
    },

    // Listar todas as categorias
    listarCategoria: async (req, res) => {
        try {

            // Busca no banco
            const categorias = await categoriaModel.selectAll();

            // Retorna as categorias
            res.status(200).json({ categorias });

        } catch (error) {
            res.status(500).json({ erro: "Erro ao buscar categorias" });
        }
    },

    // Atualizar uma categoria
    atualizarCategoria: async (req, res) => {
        try {

            // Pega o id da URL
            const { idCategoria } = req.params;

            // Pega os dados enviados
            const { descricaoCategoria, dataCad } = req.body;

            // Verifica se id e descrição foram enviados
            if (!idCategoria || !descricaoCategoria) {
                return res.status(400).json({ erro: "Dados obrigatórios faltando" });
            }

            // Atualiza no banco
            await categoriaModel.atualizarCategoria({ 
                idCategoria, 
                descricaoCategoria, 
                dataCad 
            });

            // Retorna sucesso
            res.status(200).json({ message: "Categoria atualizada com sucesso" });

        } catch (error) {
            res.status(500).json({ erro: "Erro ao atualizar categoria" });
        }
    },

    // Deletar uma categoria
    deletarCategoria: async (req, res) => {
        try {

            // Pega o id da URL
            const { idCategoria } = req.params;

            // Verifica se o id foi enviado
            if (!idCategoria) {
                return res.status(400).json({ erro: "Id obrigatório" });
            }

            // Deleta no banco
            const result = await categoriaModel.deletarCategoria(idCategoria);

            // Se não encontrou nada
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Categoria não encontrada" });
            }

            // Se deu certo
            return res.status(200).json({ message: "Categoria deletada com sucesso" });

        } catch (error) {
            return res.status(500).json({ erro: "Erro no servidor" });
        }
    }
}

// Exporta para usar nas rotas
export default categoriaController;