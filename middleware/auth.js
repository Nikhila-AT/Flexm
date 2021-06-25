const validator = require('../helpers/validate');

const register = (req, res, next) => {
    const validationRule = {
        "email": "required|email",
        "username": "required|string",
        "password": "required|string|min:6"
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

module.exports = { 
  register
}