const connection = require("../database/connection");

module.exports = {
    async create() {
        const result = await connection("filmesfav")
        .insert(filmesfav);
        return result;
    },

    async getById({ filme_id, user_id}){
        const result = await connection("filmesfav")
        .where({filme_id, user_id})
        .select("*");
        return result;

    },

    async updateById(filme_id, filmesfav){
        const result = await connection("filmesfav")
        .where(filme_id)
        .update(filmesfav);
        return result;
    },

    async deleteById(filme_id){
        const result = await connection("filmesfav")
        .where({ filme_id})
        .delete();

    }
};