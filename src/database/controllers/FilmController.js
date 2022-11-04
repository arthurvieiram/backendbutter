const Filmesfav = require("../models/Filmesfav");

module.exports = {
    async create(request, response) {
        try {
            const newFav = request.body;
            const result = await Filmesfav.create(newFav);

            return response.status(200).json(result);

        } catch (error) {
            console.warn('Filme não favoritado', error);
            return response.status(500).json({notification: "error"});
        }
    },

    async getByUser(request, response) {
        try {
            
        } catch (error) {
            console.warn('Filme não encontrado pelo nome do usuário.', error);
            return response.status(500).json({notification: "error"});
        }
    },

    async update(request, response) {
        try {
            const newFav = request.body;
            const result = await Filmesfav.updateByName(newFav);

            return response.status(200).json(result);

        } catch (error) {
            console.warn('Filme não atualizado.', error);
            return response.status(500).json({notification: "error"});
        }
    },

    async delete(request, response) {
        try {
            const {filme_nome} = request.params;
            const result = await Filmesfav.deleteByName(filme_nome);

            if (result === 0) return response.status(400).json({notification: "Filme não encontrado."});
            
            return response.status(200).json({notification: "Filme removido com sucesso."});

        } catch (error) {
            console.warn('Filme não removido.', error);
            return response.status(500).json({notification: "error"});
        }
    }
};