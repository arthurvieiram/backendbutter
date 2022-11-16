const { v4: uuidv4 } = require("uuid");

const connection = require("../database/connection");

module.exports = {
    async create(user) {
        const user_id = uuidv4();
        user.user_id = user_id; 
        const result = await connection("user")
        .insert(user);
        return user;
    },

    async get( user_id ){
        const result = await connection("user")
        .where({user_id})
        .select("*");
        return result;

    },

    async getByFields({ firebase_id }){
        console.log(firebase_id);
        const result = await connection("user")
        .where({firebase_id})
        .select("*");
        return result;

    },

    // async getByName({ user_id }){
    //     const result = await connection("user")
    //     .where({ user_nome })
    //     .select("*");
    //     return result;

    // },

    // async getByEmail({ email }){
    //     const result = await connection("user")
    //     .where({ email })
    //     .select("*");
    //     return result;

    // },

    async update(user_id, user){
        const result = await connection("user")
        .where(user_id)
        .update(user);
        return result;
    },

    // async updateByName(user_nome, user){
    //     const result = await connection("user")
    //     .where(user_nome)
    //     .update(user);
    //     return result;
    // },

    // async updateByEmails(email, user){
    //     const result = await connection("user")
    //     .where(email)
    //     .update(user);
    //     return result;
    // },

    async delete(user_id){
        const result = await connection("user")
        .where({ user_id })
        .delete();

        return result;

    },

    // async deleteByName(user_nome){
    //     const result = await connection("user")
    //     .where({ user_nome })
    //     .delete();

    // },

    // async deleteByEamil(email){
    //     const result = await connection("user")
    //     .where({ email })
    //     .delete();

    // },
};