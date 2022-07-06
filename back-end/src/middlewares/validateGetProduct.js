const Joi = require("joi");

const validateGetProduct = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string().alphanum().min(12).max(12).required(),
  });

  const { error } = schema.validate(req.params);

  if (error) {
    return res.status(400).json(error);
  } else {
    next();
  }
};

module.exports = validateGetProduct;
