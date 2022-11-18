const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().min(1).max(40).required(),
            data: Joi.string().min(4).max(4).required(),
            diretor: Joi.string().required(),
            imagem: Joi.string().required(),
        })
    }),
    get: celebrate({
        [Segments.BODY]: Joi.object().keys({
            
        })
    }),
    update: celebrate({
        [Segments.BODY]: Joi.object().keys({
            
        })
    }),
    delete: celebrate({
        [Segments.BODY]: Joi.object().keys({
            
        })
    }),
}
