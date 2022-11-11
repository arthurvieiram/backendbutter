const User = require("../../models/User");
const firebase = require("../utilities/firebase");/*Chamando a função do firebase*/

module.exports = {
    async create(request, response) {
        try {
            const newUser = request.body;
            
            /*adicionando firebase*/
            const uid = await firebase.createNewUser(user.email, user.senha);
            delete user.senha;
            user.firebase_id = uid;
            /* 1) adicionar no nosso diagrama uml o campo "firebase_id"
             2) rodar npx knex migrate:rollback (desfaz todas as migrations feitas)
             3) na Migration user colocar "table.string("firebase_id").notNullable();"
             4) Depois disso, salvar e rodar todas e dar um "npx knex migrate:lastest (vai rodar todas as migrations")
             5) última coisa : ir em uservallidator "que ainda não está criado"
              na parte de "create" colocar "senha: Joi.string().min(aqui vai ser o tam. senha).required(),"
              fazer o mesmo para name: e email:
              Após isso temos que dar npm start e testar no inmsonia pra ver se tá tudo certo.
              */
             
            const result = await User.create(newUser);

            return response.status(200).json(result);

        } catch (error) {
            console.warn('Usuário não criado', error);
            return response.status(500).json({notification: "error"});
        }
    },

    async get(request, response) {
        try {
            const { user_id } = request.params; 
            const result = await User.get(user_id);

            return response.status(200).json(result);

        } catch (error) {
            console.warn('Usuário não encontrado', error);
            return response.status(500).json({notification: "error"});
        }
    },

    async update(request, response) {
        try {
            const { user_id } = request.params;
            const user = request.body
            const result = await User.update(user_id, user);

            return response.status(200).json(result);
        } catch (error) {
            console.warn('User não atualizado', error);
            return response.status(500).json({notification: "error"});
        }
    },

    async delete(request, response) {
        try {
            const { user_id } = request.params;
            const result = await User.delete(user_id);

            if (result === 0) return response.status(400).json({notification: "Usuário não encontrado."});
            
            return response.status(200).json({notification: "Usuário removido com sucesso."});
        } catch (error) {
            console.warn('Usuário não favoritado', error);
            return response.status(500).json({notification: "error"});
        }
    }
};