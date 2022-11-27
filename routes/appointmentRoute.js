const express=require('express')
const appointmentController=require('../controllers/appointmentController');

const router=express.Router();

router.post('/post',appointmentController.appo_post);
router.get('/get',appointmentController.appo_get);

module.exports=router;
