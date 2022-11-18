const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().min(1).max(40).required(),
            email: Joi.string().email().required(),
            senha: Joi.string().min(6).max(20).required(),
            endereco: Joi.string().max(50).required(),
            
        })
    }),

    get: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        })
    }),

    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().alphanum().min(1).max(40).optional(),
            email: Joi.string().email().optional(),
            senha: Joi.string().min(6).max(20).optional(),
            endereco: Joi.string().max(50).optional(),
            idade: Joi.string().max(3).required(),
        })
        .min(1),
    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().required(),
        })
    })
}
