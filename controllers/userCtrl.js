const userModel = require('../models/userModels');
const bcrypt = require('bcryptjs')

// register callback
const registerController = async(req,res) =>{
    try{
        
    }catch(error){
        console.log(error)
        res.status(500).send({success:false,message:`Register Controller ${error.message}`})

    }
};


const loginController = () => {

};


module.exports = {loginController, registerController};
