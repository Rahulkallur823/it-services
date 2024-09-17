const { ZodError } = require('zod');

const validate = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // Extract and format error messages from ZodError
        const errors = error.errors.map(err => ({
          path: err.path.join('.'),
          message: err.message
        }));
        return res.status(400).json({ errors });
      }
      // For other errors, return a generic error message
      return res.status(500).json({ message: 'Server error' });
    }
  };
};

module.exports = validate;
