const express=require('express');
const ejs=require('ejs');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');

const adminRoute=require('./routes/adminRoutes');
const appointmentRoute=require('./routes/appointmentRoute')
const userRoute=require('./routes/userRoute')
const { requireAuth, checkPatient }=require('./middleware/userMiddleware')

const app=express();

// database connection

const dbURI="mongodb://localhost:27017";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>console.log("mongo connected"))
  .catch(err => console.log(err));

// middleware 
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.listen(3000,()=>console.log("app started at 3000"));


// render pages
app.get('/',(req,res)=>{
    res.render('index');
});

// admin page
app.get('/admin',(req,res)=>{
    res.render('admin');
})

app.get('/patientview',checkPatient,(req,res)=>{
    res.render('patientView');
})

app.get('/patientlogin',(req,res)=>{
    res.render('patientLogin');
})

app.get('/doctorappointment',(req,res)=>{
    res.render('doctorAppointments');
})
// routes
app.use('/',adminRoute);
app.use('/',userRoute);
app.use('/appointment',appointmentRoute);