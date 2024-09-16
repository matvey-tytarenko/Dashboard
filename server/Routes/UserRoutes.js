const { login, signup, logout } = require('../Controllers/UserController');
const router = require('express').Router();

// Routers
router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);

// Export
module.exports = router