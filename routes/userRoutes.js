const express = require('express');
import Register from './../client/src/pages/Register';
const { loginController, registerController } = require('../controllers/userCtrl');

// router object
const router =express.Router();


// routes
// LOGIN || POST
router.post('/login',loginController);

//REGISTER || POST 
router.post('/register', registerController);
module.exports= router;
