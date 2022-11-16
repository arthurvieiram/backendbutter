const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
        user_id: Joi.string().required(),
        filme_id: Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object()
            .keys({
                authorization: Joi.string().required(),
            })
            .unknown(),
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
