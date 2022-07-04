const Joi = require("joi");

const validateGetProducts = (req, res, next) => {
  const schema = Joi.object({
    q: Joi.string().alphanum().min(1).max(100).required(),
  });

  const { error } = schema.validate(req.query);

  if (error) {
    return res.status(400).json(error);
  } else {
    next();
  }
};

module.exports = validateGetProducts;
