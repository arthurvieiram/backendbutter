const express = require("express");
const routes = express.Router();

const auth = require("./middlewares/authentication");

const UserController = require("./database/controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const FilmController = require("./database/controllers/FilmController");
const FilmValidator = require("./validators/FilmValidator");

const FavController = require("./database/controllers/FavController");
const FavValidator = require("./validators/FavValidator");

const SessionController = require("./database/controllers/SessionController");

//Session
routes.post("/login", SessionController.signIn);

// Users
routes.get("/users/:user_id", UserValidator.get, UserController.get);
routes.post("/users", UserValidator.create, UserController.create);
routes.delete("/users/:user_id", UserValidator.delete, UserController.delete);

// Filmes favoritados
routes.get("/filmesfav/:user_id", FavValidator.get, auth.authenticateToken, FavController.get);
routes.post("/filmesfav/:filme_id/:user_id", FavValidator.create, auth.authenticateToken, FavController.create);
// routes.put("/filmesfav/:filme_id/:user_id", FavController.update);
routes.delete("/filmesfav/:filme_id/:user_id", FavValidator.delete, auth.authenticateToken, FavController.delete);

// Filmes 
routes.get("/filmes", FilmValidator.get, FilmController.get);
routes.post("/filmes", FilmValidator.create, auth.authenticateToken, FilmController.create);
routes.put("/filmes/:filme_id", FilmValidator.update, FilmController.update);
routes.delete("/filmes/:filme_id", FilmValidator.delete, FilmController.delete);


module.exports = routes;