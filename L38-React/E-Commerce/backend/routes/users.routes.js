const path = require('path');
const express = require('express');
const usersModel = require('../models/users');
const { createUser } = require('../controllers/users.controller');
const router = express.Router();

// This will create new user
router.post('/create', createUser);



module.exports = router;