const router = require('express').Router();
const Teacher = require("../models/Teachers");
const path = require("path");
const multer = require("multer");
var nodemailer = require('nodemailer');
const {body, check, validationResult } = require('express-validator');

const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function (req, file, cb) {
       cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
 });
 
 const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
 }).single("myImage");
 

 router.post('/addteacher', function (req, res) {

    upload(req, res, function (err) {
      
       const Teachers = new Teacher({
          title:req.body.title,
          text:req.body.text,
          degignation:req.body.degignation,
          websites:req.body.websites,
          image:req.file.filename,  
       })
       Teachers.save().then(data=>{
          res.sendStatus(200)
       }).catch(error=>{
          res.send('errr')
       })
      
 
    })
 })

 router.get('/getteacher',async(req,res)=>{
    const data=await Teacher.find({});
    res.send(data);
 })
 router.delete('/deleteteacher/:id',async(req,res)=>{
   
   const data=await Teacher.deleteOne({_id:req.params.id});
   res.send(data);
})

router.post('/editteacher/:id', function (req, res) {

   upload(req, res,async (err) =>{
      
      if(typeof req.file=== "undefined"){
         const data= await Teacher.updateOne({_id:req.params.id},{$set:{
            title:req.body.title,
            text:req.body.text,
            degignation:req.body.degignation,
            websites:req.body.websites,
           }});
           res.send(data);
      }
      else{
         const data= await Teacher.updateOne({_id:req.params.id},{$set:{title:req.body.title,
            text:req.body.text,
            degignation:req.body.degignation,
            websites:req.body.websites,
            image:req.file.filename,  
             }});
             res.send(data);
      }
     
     
     

   })
})

router.post('/mail',(req,res)=>{
   console.log(req.body);
   
     var transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: 'tenminuteversity@gmail.com',
         pass: 'cwexlmmtrcxxuwbg'
       }
     });
     var mailOptions = {
       from: `tenminuteversity@gmail.com`,
       to: req.body.email,
       subject: 'req.body.name',
       html: `<h1>Your user name is: </h1>`
       
     };
 
     transporter.sendMail(mailOptions, async function (error, info) {
       if (error) {
         console.log(error);
       } else {
         console.log(info);
        res.send('Email has been send');
       }
     });
  
 
 });
 
module.exports = router;