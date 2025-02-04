import Joi from 'joi'

export const bodyInstrumentSchema = Joi.object({
    body: Joi.object({
        instrument: Joi.string().max(80).required(),
        type: Joi.string().max(80).required(),
        description: Joi.string().max(80).required()

    })
})

export const idInstrumentSchema = Joi.object({
    params: Joi.object({
        id: Joi.string().pattern(/^[0-9]+$/, 'Debe ser un numero').required()
    })
})

export const updateInstrumentSchema = Joi.object({
    body: bodyInstrumentSchema.extract('body'),
    params: idInstrumentSchema.extract('params')

})
