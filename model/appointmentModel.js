const mongoose=require('mongoose')

const appointmentSchema=mongoose.Schema({
    doctorId:{
        type:String,
        required:true
    },
    patientId:{
        type:String,
        required:true
    },
    spec:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    }
},{timestamps:true});

const Appointment=new mongoose.model('Appointment',appointmentSchema);
module.exports=Appointment;