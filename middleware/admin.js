const validator = require('../helpers/validate');

const addProduct = (req, res, next) => {
    const validationRule = {
        "productName": "required|string",
        "brand": "required|string",
        "color": "required|string",
        "quantity": "required",
        "price": "required"
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
    addProduct
}