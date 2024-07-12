const config = require("../config");

const validateParams = (req, res, next) => {
    const { categoryname } = req.params;

    if(!config.CATEGORIES.includes(categoryname)) {
        return res.status(400).json({ message: 'Invalid Category!!' });
    }

    next();
}

module.exports = validateParams;