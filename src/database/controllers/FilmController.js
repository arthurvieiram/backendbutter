const Filmes = require("../../models/Filmes");

module.exports = {
    async create(request, response) {
        try {
            const newFilm = request.body;
            const result = await Filmes.create(newFilm);

            return response.status(200).json(result);

        } catch (error) {
            console.warn('Filme não criado', error);
            return response.status(500).json({notification: "error"});
        }
    },

    async get(request, response) {
        try {
            const {filme_id} = request.query;
            const filter = filme_id ? {filme_id} : {}
            const result = await Filmes.get(filter);

            return response.status(200).json(result);

        } catch (error) {
            console.warn('Filme não atualizado.', error);
            return response.status(500).json({notification: "error"});
        }
    },
    
    async update(request, response) {
        try {
            const newFilm = request.body;
            const result = await Filmes.update(newFilm);

            return response.status(200).json(result);

        } catch (error) {
            console.warn('Filme não atualizado.', error);
            return response.status(500).json({notification: "error"});
        }
    },

    async delete(request, response) {
        try {
            const {filme_id} = request.params;
            const result = await Filmes.delete(filme_id);

            if (result === 0) return response.status(400).json({notification: "Filme não encontrado."});
            
            return response.status(200).json({notification: "Filme removido com sucesso."});

        } catch (error) {
            console.warn('Filme não removido.', error);
            return response.status(500).json({notification: "error"});
        }
    },

};