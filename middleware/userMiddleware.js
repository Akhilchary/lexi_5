const jwt = require('jsonwebtoken');
const Patient=require('../model/patientModel')

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // check json web token exists & is verified
    if (token) {
        jwt.verify(token, "secret i need to protect", (err, decodedToken) => {
        if (err) {
            console.log(err.message);
            res.redirect('/login');
        } else {
            console.log(decodedToken);
            next();
        }
        });
    } else {
        res.redirect('/login');
    }
};

// check current patient
const checkPatient = (req, res, next) => {
    const token = req.cookies.jwt;
    // console.log("token", token);
    if (token) {
        jwt.verify(token,"secret i need to protect", async (err, decodedToken) => {
        if (err) {
            res.redirect('/patientlogin')
        } else {
            let pat = await Patient.findById(decodedToken.id);
            res.locals.pat=pat
            // res.redirect('/patientview');
            next();
        }
        });
    } else {
        res.redirect('/patientlogin')
    }
};

// check doctor

const checkDoctor=(req,res,next)=>{
    const token = req.cookies.jwt;
    // console.log("token", token);
    if (token) {
        jwt.verify(token,"secret i need to protect", async (err, decodedToken) => {
        if (err) {
            res.redirect('/doctorlogin')
        } else {
            let pat = await Patient.findById(decodedToken.id);
            res.locals.pat=pat
            // res.redirect('/patientview');
            next();
        }
        });
    } else {
        res.redirect('/patientlogin')
    }
}

module.exports = { requireAuth, checkPatient ,checkDoctor};