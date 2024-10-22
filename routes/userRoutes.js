const express = require('express');
const { loginController, registerController, authController, applyDoctorController } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

// router object
const router =express.Router();


// routes
// LOGIN || POST
router.post('/login', loginController);

//REGISTER || POST 
router.post('/register', registerController);


//AUTH || POST 
router.post('/getUserData',authMiddleware, authController);

//APPLLY DOCTOR  || POST 
router.post('/apply-doctor',authMiddleware, applyDoctorController);

module.exports= router;

