const { v4: uuidv4 } = require("uuid");
const connection = require("../database/connection");

module.exports = {
    async create(filmes) {
        const filme_id = uuidv4();
        filmes.filme_id = filme_id; 
        const result = await connection("filmes")
        .insert(filmes);
        return result;
    },

    async getById({ filme_id }){
        const result = await connection("filmes")
        .where({ filme_id })
        .select("*");
        return result;

    },

    async getByName({ filme_nome }){
        const result = await connection("filmes")
        .where({ filme_nome })
        .select("*");
        return result;

    },

    async getByDiretor({ diretor }){
        const result = await connection("filmes")
        .where({ diretor })
        .select("*");
        return result;

    },

    async updateById(filme_id, filmes){
        const result = await connection("filmes")
        .where(filme_id)
        .update(filmes);
        return result;
    },

    async updateByName(filme_nome, filmes){
        const result = await connection("filmes")
        .where(filme_nome)
        .update(filmes);
        return result;
    },

    async updateByDiretor(diretor, filmes){
        const result = await connection("filmes")
        .where(diretor)
        .update(filmes);
        return result;
    },

    async deleteById(filme_id){
        const result = await connection("filmes")
        .where({ filme_id })
        .delete();

    },

    async deleteByName(filme_nome){
        const result = await connection("filmes")
        .where({ filme_nome })
        .delete();

    },

    async deleteByDiretor(diretor){
        const result = await connection("filmes")
        .where({ diretor })
        .delete();

    }
};