const firebase = require("../../utilities/firebase");
const UserModel = require("../../models/User");
const jwt = require("jsonwebtoken");

module.exports = {

    async signIn(request, response){
        try {
            const { email, senha } = request.body;

            let uid ;
            try {
                uid = await firebase.login(email, senha);
            } catch (error) {
                console.log(error);
                return response
                .status(403)
                .json({ notification: "Credenciais inválidos"});
            }
           
            const user = await UserModel.getByFields({ firebase_id: uid });

            const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "30d",
            });

            return response.status(200).json({ user, accessToken });
        } catch (error) {
            console.log(error);
            return response
            .status(500)
            .json({ notification: "Erro tentando validar credenciais"})
            
        }
    }

}