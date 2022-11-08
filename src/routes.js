const express = require("express");
const routes = express.Router();

const UserController = require("./database/controllers/UserController");
const FilmController = require("./database/controllers/FilmController");
const FavController = require("./database/controllers/FavController");

// Users
routes.get("/users/:user_id", UserController.get);
routes.post("/users", UserController.create);
routes.delete("/users/:user_id", UserController.delete);

// Filmes favoritados
routes.get("/filmesfav/:user_id", FavController.get);
routes.post("/filmesfav/:filme_id/:user_id", FavController.create);
// routes.put("/filmesfav/:filme_id/:user_id", FavController.update);
routes.delete("/filmesfav/:filme_id/:user_id", FavController.delete);

// Filmes 
routes.get("/filmes/:filme_id", FilmController.get);
routes.post("/filmes", FilmController.create);
routes.put("/filmes/:filme_id", FilmController.update);
routes.delete("/filmes/:filme_id", FilmController.delete);


module.exports = routes;