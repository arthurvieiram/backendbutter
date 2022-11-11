const express = require("express");
const routes = express.Router();

const UserController = require("./database/controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const FilmController = require("./database/controllers/FilmController");
const FilmValidator = require("./validators/FilmValidator");

const FavController = require("./database/controllers/FavController");
const FavValidator = require("./validators/FavValidator");

// Users
routes.get("/users/:user_id", UserValidator.get, UserController.get);
routes.post("/users", UserValidator.create, UserController.create);
routes.delete("/users/:user_id", UserValidator.delete, UserController.delete);

// Filmes favoritados
routes.get("/filmesfav/:user_id", FavValidator.get, FavController.get);
routes.post("/filmesfav/:filme_id/:user_id", FavValidator.create, FavController.create);
// routes.put("/filmesfav/:filme_id/:user_id", FavController.update);
routes.delete("/filmesfav/:filme_id/:user_id", FavValidator.delete, FavController.delete);

// Filmes 
routes.get("/filmes/:filme_id", FilmValidator.get, FilmController.get);
routes.post("/filmes", FilmValidator.create, FilmController.create);
routes.put("/filmes/:filme_id", FilmValidator.update, FilmController.update);
routes.delete("/filmes/:filme_id", FilmValidator.delete, FilmController.delete);


module.exports = routes;