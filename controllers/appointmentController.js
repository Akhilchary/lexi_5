
const Appointment=require('../model/appointmentModel')


// post a new appointment

const appo_post=async(req,res)=>{
    console.log("hehe")
    const {doctorId,patientId,spec,Date}=req.body;
    console.log(req.body)
    try{
        const appo=await Appointment.create({doctorId,patientId,spec,Date});
        res.status(200).send(appo);
    }
    catch(err)
    {
        res.send(err);
    }

}

// get all appointments

const appo_get=async(req,res)=>{
    try{
        let appo=await Appointment.find();
        res.send(appo);
    }
    catch(err)
    {
        res.send(err);
    }
}

module.exports={appo_post,appo_get};