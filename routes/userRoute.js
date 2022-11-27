const express=require('express')

const userController=require('../controllers/usersController');

const router=express.Router();


router.post('/patlogin',userController.login_patient_post);

module.exports=router
