const mongoose=require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const patientSchema=new mongoose.Schema({
    patientId:ObjectId,
    username:{
        type:String,
        required:true,
        unique:true
    },
    realname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

patientSchema.statics.login = async function(username,password) {
    const user = await this.findOne({username});
    if(user) {
        // console.log(password,user.password);
        if(password === user.password) {
            return user;
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}


const Patient=new mongoose.model('Patient',patientSchema);
module.exports=Patient;