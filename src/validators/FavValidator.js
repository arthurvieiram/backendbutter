const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
        user_id: Joi.string().required(),
        filme_id: Joi.string().required(),
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
