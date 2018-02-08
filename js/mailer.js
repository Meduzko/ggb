var express = require('express');
var app = express();
const nodemailer = require('nodemailer');
var https         = require('https');
var bodyParser = require('body-parser');
const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        //user: 'globalgreenbuildingsmailer@gmail.com',
        user: 'apanchuk59@gmail.com',
        //pass: '4pDcBocx'
        pass: 'cfifgfyxermeduzko95'
    }
});


router.get('/send',function(req,res){
    let mailOptions = {
        to : "chatbox@globalgreenbuildings.com",
        subject: req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);

    transporter.sendMail(mailOptions, function(error, response){
     if(error){
            return console.log(error);
        //res.end("error");
     }else{
            console.log("Message sent: " + response.Message);
        res.end("sent");
         }
});
});


/*
app.post('/appoitment_send', function(req, res){
  var obj = {};
  console.log('body: ' + JSON.stringify(req.body));
  res.send(req.body);
});
*/

router.get('/contact_send',function(req,res){
    let mailOptions = {
        to : "info@globalgreenbuildings.com",
        subject: req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);

    transporter.sendMail(mailOptions, function(error, response){
     if(error){
            return console.log(error);
        //res.end("error");
     }else{
            console.log("Message sent: " + response.Message);
        res.end("sent");
         }
});
});



router.post('/appoitment_send',function(req,res) {
  item.findAll(function(err, rows, fields) {
    if(err) throw err;
    res.json(rows);
  })

  });

module.exports = router;