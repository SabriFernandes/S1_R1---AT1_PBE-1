// Importa a conexão com o banco de dados
import pool from "../config/db.js";

// Objeto que contém as funções da categoria
const categoriaModel = {

    // Inserir uma nova categoria no banco
    insert: async (descricaoCategoria) => {

        // Comando SQL para inserir
        const sql = "INSERT INTO categorias (descricaoCategoria) VALUES (?)";

        // Valor que será enviado para o ?
        const values = [descricaoCategoria];

        // Executa o comando no banco
        const [result] = await pool.execute(sql, values);

        // Retorna o resultado da operação
        return result;
    },


    // Buscar todas as categorias
    selectAll: async () => {

        // Comando para selecionar tudo da tabela
        const sql = "SELECT * FROM Categorias";

        // Executa no banco
        const [rows] = await pool.execute(sql);

        // Retorna as linhas encontradas
        return rows;
    },


    // Atualizar uma categoria pelo id
    atualizarCategoria: async ({ idCategoria, descricaoCategoria, dataCad }) => {

        // Comando para atualizar a categoria
        const sql = `
            UPDATE categorias 
            SET descricaoCategoria = ?, dataCad = ? 
            WHERE idCategoria = ?;
        `;

        // Valores que substituem os ?
        // Se vier undefined, envia null
        const values = [
            descricaoCategoria ?? null, 
            dataCad ?? null, 
            idCategoria
        ];

        // Executa no banco
        const [result] = await pool.execute(sql, values);

        // Retorna o resultado
        return result;
    }, 


    // Deletar uma categoria pelo id
    deletarCategoria: async (idCategoria) => {
        try {

            // Comando para deletar
            const sql = 'DELETE FROM categorias WHERE idCategoria = ?';

            // Valor que substitui o ?
            const values = [idCategoria];

            // Executa no banco
            const [rows] = await pool.execute(sql, values);

            // Retorna o resultado
            return rows;

        } catch (error) {

            // Mostra erro no console
            console.error('erro ao deletar categoria:', error);

            // Repassa o erro
            throw error;
        }
    },
}

// Exporta o model para usar no controller
export default categoriaModel;