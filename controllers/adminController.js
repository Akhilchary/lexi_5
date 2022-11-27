const express=require('express');
const md5=require('md5');
const router=express.Router();


const Doctor=require('../model/doctorModel');
const Patient=require('../model/patientModel')

// from here admin can make 2 post requests to register doc and patient

// post doc
const Doc_post=async (req,res)=>{
    let {username,realname,yearsOfExp,specialization,password}=req.body;
    // console.log(req.body);
    try{
        // let prev=Doctor.findOne({username});
        // if(prev) throw "doctor with same username";
        password=md5(password);
        const doc=await Doctor.create({username,realname,yearsOfExp,password,specialization});

        console.log(doc," doc created");
        res.status(200).send(doc);
    }
    catch(err){
        res.send(err);
    }
}

// patient post
const Patient_post=async (req,res)=>{
    let {username,realname,password}=req.body;
    try{
        // let prev=Patient.findOne({username});
        // console.log(prev);
        // if(prev) res.send(prev);
        // throw "patient with same username";
        password=md5(password);
        console.log(password);
        const pat=await Patient.create({username,realname,password});
        res.status(200).send(pat);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}



// get all doctors
const Doc_get=async(req,res)=>{
    try{
        let docs=await Doctor.find();
        res.send(docs);
    }
    catch(err)
    {
        res.send(err);
    }
}


// get all patients
const Pat_get=async (req,res)=>{
    try{
        let pats=await Patient.find();
        
        res.send(pats);
    }
    catch(err)
    {console.log(err);
        res.send(err);
    }
}

// get all doctors based on spec
const doc_spec_get=async(req,res)=>{
    let spec=req.params.spec;
    console.log(spec," spec")
    try{
        let doc=await Doctor.find({specialization:spec});
        // console.log(doc);
        res.send(doc);
    }
    catch(err)
    {
        console.log(err);res.send(err);
    }
}
// get doctor based on id

const doc_name_get=async(req,res)=>{
    let id=req.params.id;
    // console.log(id," id ");
    try{
        let doc=await Doctor.findOne({_id:id});
        // console.log(doc);
        res.send(doc);
    }
    catch(err)
    {
        console.log(err);res.send(err);
    }
}

// get patient based on id

const pat_name_get=async(req,res)=>{
    let id=req.params.id;
    // console.log(spec," spec")
    try{
        let doc=await Patient.findOne({_id:id});
        // console.log(doc);
        res.send(doc);
    }
    catch(err)
    {
        console.log(err);res.send(err);
    }
}

module.exports={Doc_post,Patient_post,Doc_get,Pat_get,
    doc_spec_get,doc_name_get,pat_name_get};