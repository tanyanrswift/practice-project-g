const express = require('express');
const router = express.Router();

router.post('/api/users/signUp', userController.signUp);