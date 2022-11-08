const Filmesfav = require("../../models/Filmesfav");

module.exports = {

    async create(request, response) {
        try {
            const { filme_id } = request.params;
            const { user_id } = request.params;
            const newFav = request.body;
            const result = await Filmesfav.create(newFav, filme_id, user_id);

            return response.status(200).json(result);

        } catch (error) {
            console.warn('Filme não favoritado', error);
            return response.status(500).json({notification: "error"});
        }
    },

    async get(request, response) {
        try {
            const{user_id} = request.params;
            // const{filme_id} = request.params;
            const result = await Filmesfav.get(user_id);

            return response.status(200).json(result);
            
        } catch (error) {
            console.warn('Filme não encontrado pelo nome do usuário.', error);
            return response.status(500).json({notification: "error"});
        }
    },

    async delete(request, response) {
        try {
            const{user_id} = request.params;
            const {filme_id} = request.params;
            const result = await Filmesfav.delete(filme_id, user_id);

            if (result === 0) return response.status(400).json({notification: "Filme não encontrado."});
            
            return response.status(200).json({notification: "Filme removido com sucesso."});

        } catch (error) {
            console.warn('Filme não removido.', error);
            return response.status(500).json({notification: "error"});
        }
    },

}