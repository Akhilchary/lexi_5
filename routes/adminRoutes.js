const express=require('express');

const adminController=require('../controllers/adminController');


const router=express.Router();


router.post('/docregister',adminController.Doc_post);
router.post('/patientregister',adminController.Patient_post)
router.get('/patientsget',adminController.Pat_get);
router.get('/doctorsget',adminController.Doc_get);
router.get('/doctorsget/spec/:spec',adminController.doc_spec_get);
router.get('/doctorname/:id',adminController.doc_name_get);
router.get('/patname/:id',adminController.pat_name_get);


module.exports=router;