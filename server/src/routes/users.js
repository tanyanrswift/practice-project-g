const express = require('express');
const router = express.Router();

router.get('/api/users/signOut', userController.signOut);

router.post('/api/users/signIn', userController.signIn);
router.post('/api/users/signUp', userController.signUp);