const jwt = require('jsonwebtoken');
const { model } = require('mongoose');
require('dotenv').config();

const validateJwtToken = (req, res, next) => {
    const token = req.header('jwt-token');
    if (!token)
        return res.status(401).json({ message: 'Access denied. No token provided.'});
    
    try {
        const verified = jwt.verify(token, process.env.STAFF_SECRET_KEY);
        req.user = verified;
        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Invalid token.' });
    }
}

module.exports = {validateJwtToken: validateJwtToken};