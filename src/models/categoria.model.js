import pool from "../config/db.js";

const categoriaModel = {

    insert: async (descricaoCategoria) => {
        const sql = "INSERT INTO Categorias (descricaoCategoria) VALUES (?)";
        const values = [descricaoCategoria];

        const [result] = await pool.execute(sql, values);
        return result;
    },
    selectAll: async () => {
        const sql = "SELECT * FROM Categorias";

        const [rows] = await pool.execute(sql);
        return rows;
    }

};

export default categoriaModel;