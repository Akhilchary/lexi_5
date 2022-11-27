const mongoose=require('mongoose');


const doctorSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },
    realname:{
        type:String,
        required:true
    },
    yearsOfExp:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
    },

});

// userSchema.statics.login = async function(username,password) {
//     const user = await this.findOne({username});
//     if(user) {
//         // console.log(password,user.password);
//         if(password === user.password) {
//             return user;
//         }
//         throw Error('incorrect password')
//     }
//     throw Error('incorrect email')
// }

const Doctor=new mongoose.model('Doctor',doctorSchema);
module.exports=Doctor;
