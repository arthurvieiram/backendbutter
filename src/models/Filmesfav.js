const { v4: uuidv4 } = require("uuid");
const connection = require("../database/connection");

module.exports = {
    async create(filmesfav, filmeId, userId) {
        //const filme_id = uuidv4();
        filmesfav.filme_id = filmeId; 
        filmesfav.user_id = userId;
        const result = await connection("filmesfav")
        .insert(filmesfav);
        return filmesfav;
    },

    async get( user_id ){
        const result = await connection("filmesfav")
        .where({ user_id })
        .select("*");
        return result;

    },

    async update(filme_id, filmesfav){
        const result = await connection("filmesfav")
        .where(filme_id)
        .update(filmesfav);
        return result;
    },

    async delete(filme_id, user_id){
        const result = await connection("filmesfav")
        .where({filme_id, user_id})
        .delete();
        
        return result;

    }
};