const express = require("express");
const routes = express.Router();

const users = [];
let favfilmes = [];

routes.get("/users", (req, res) => {
    const query = req.query;
    
    res.status(200).json({users});
});

routes.post("/users", (req, res) => {
    const newUser = req.body;
    
    users.push(newUser);
    
    res.status(200).json({message: "Usuário cadastrado com sucesso!"});
});

routes.delete("/users/:user_id", (req, res) => {
     const userId = req.params.user_id;
     
     res.status(200).json({message: "Usuário excluído com sucesso!"});
});

module.exports = routes;