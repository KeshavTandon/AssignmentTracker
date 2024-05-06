const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Function to generate a secure random string
const generateSecureKey = (length) => {
  return crypto.randomBytes(Math.ceil(length/2)).toString('hex').slice(0, length);
};

// Generate a secure key with a length of 64 characters (equivalent to 256 bits)
const SECRET_KEY = generateSecureKey(64); // Store this securely!

const generateToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
        expiresIn: '1h'
    });
};
const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};
module.exports = { generateToken, verifyToken };