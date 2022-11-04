const express = require("express");
const routes = express.Router();

const UserController = require(".controllers/UserController");
const FilmController = require(".controllers/FilmController");

// Users
routes.get("/users/:user_id", UserController.geyById);
routes.post("/users", UserController.create);
routes.delete("/users/:user_id", UserController.delete);

// Filmes favoritados
routes.get("/filmes", FilmController.geyByUser);
routes.post("/filmes", UserController.create);
routes.put("/filmes/:filme_nome", FilmController.update);
routes.delete("/filmes/:filme_nome", FilmController.delete);

module.exports = routes;