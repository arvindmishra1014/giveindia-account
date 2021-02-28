const Joi = require("joi");

const transferMoneyValidation = {
    body: Joi.object({
        fromAccountId: Joi.number().required(),
        toAccountId: Joi.number().required(),
        amount: Joi.string().required(),
    })
};

module.exports = {
    transferMoneyValidation
};