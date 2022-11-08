const User = require("../../models/User");

module.exports = {
    async create(request, response) {
        try {
            const newUser = request.body;
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