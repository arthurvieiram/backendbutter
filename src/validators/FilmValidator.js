const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            
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
