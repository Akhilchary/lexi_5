const jwt = require('jsonwebtoken')
const md5=require('md5');
const Patient=require('../model/patientModel');
const Doctor=require('../model/doctorModel');

const createToken = (id) => {
    return jwt.sign({id},"secret i need to protect",{
        expiresIn : 60*60
    });
}
// login patient 

const login_patient_post=async(req,res)=>{
    let {username,password}=req.body;
    password=md5(password)
    try{
        const p=await Patient.login(username,password);
        const token=createToken(p._id);
        res.cookie('jwt',token,{httpOnly : true, maxAge : 60*60*1000});
        res.cookie('username',p.username);
        res.cookie('usertype','patient');
        let s=JSON.stringify(p._id);
        let num=parseInt(s,10);
        // console.log(num);
        res.cookie('patientId',JSON.stringify(p._id));
        
        res.redirect('/patientview');
    }
    catch(err)
    {
        console.log(err);
        res.send(err);
        // res.redirect('/patientlogin');
    }
}


// login doctor

const login_doctor_post=async(req,res)=>{
    let {username,password}=req.body;
    password=md5(password)
    try{
        const p=await Doctor.login(username,password);
        const token=createToken(p._id);
        res.cookie('jwt',token,{httpOnly : true, maxAge : 60*60*1000});
        res.cookie('username',p.username);
        res.cookie('usertype','doctor');
        res.cookie('doctorId',p._id);
        res.redirect('/doctorview');
    }
    catch(err)
    {
        console.log(err);
        res.send(err);
        // res.redirect('/patientlogin');
    }
}




// login admin






module.exports={login_patient_post,login_doctor_post};