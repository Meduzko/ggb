'use strict';
var express 	 = require('express');
var app 		 = express();
const nodemailer = require('nodemailer');
var https		 = require('https');
var bodyParser   = require('body-parser');
var fs 			 = require('fs');
var path 		 = require('path');
//var xml2js 		 = require('xml2js');
//var sitemap 	 = require('express-sitemap');
//var sm 			 = require('sitemap');
var sitemap = require('express-sitemap');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'example@gmail.com',
        pass: 'somepass'
    }
});


app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://185.14.186.244:3001');
  res.setHeader('Access-Control-Allow-Origin', 'https://www.globalgreenbuildings.com');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});



var map = sitemap({
    sitemap: 'sitemap.xml', // path for .XMLtoFile
    robots: 'robots.txt', // path for .TXTtoFile
    itemapSubmission: '/sitemap.xml', // path of sitemap into robots
    url: 'www.globalgreenbuildings.com',
    map: {
        '/index.html': ['get'],
        '/idea.html': ['get'],
        '/about.html': ['get'],
        '/contact.html': ['get'],
        '/legal.html': ['get'],
        '/users/sign_up.html': ['get'],
    },
    route: {
        '/index.html': {
            lastmod: '2018-01-17',
            changefreq: 'monthly',
            priority: 1.0,
        },
        '/idea.html': {
            lastmod: '2018-01-17',
            changefreq: 'monthly',
            priority: 0.7,
        },
        '/about.html': {
            lastmod: '2018-01-17',
            changefreq: 'monthly',
            priority: 0.5,
        },
        '/contact.html': {
            lastmod: '2018-01-17',
            changefreq: 'monthly',
            priority: 0.6,
        },
        '/legal.html': {
            lastmod: '2018-01-17',
            changefreq: 'monthly',
            priority: 0.3,
        },
        '/users/sign_up.html': {
            lastmod: '2018-01-17',
            changefreq: 'monthly',
            priority: 0.3,
        },
    },

    //generate: app
});

var robots = sitemap({
  robots: 'robots.txt', // custom path inside a dir
  url: 'www.globalgreenbuildings.com',
  map: {
    '/index.html': ['get'],
  },
  route: {
    /*
    'ALL': {
      disallow: true
    }
    */
    '/index.html': {
      allow: true
    } 
  }
});

app.get('/sitemap.xml', function(req, res) { // send XML map
  map.XMLtoWeb(res);
}).get('/robots.txt', function(req, res) { // send TXT map

  map.TXTtoWeb(res);
});

console.log(map);




/*
sitemap({
  sitemap: 'normal.xml', // path for .XMLtoFile
  robots: 'normal.txt', // path for .TXTtoFile
  generate: app, // option or function, is the same
  sitemapSubmission: '/normal.xml', // path of sitemap into robots
  route: { // specific option for some route
    '/': {
      lastmod: '2014-06-19',
      changefreq: 'always',
      priority: 1.0,
    },
    '/admin': {
      disallow: true, // write this route to robots.txt
    },
    '/nooo': {
      lastmod: '2014-06-20',
      changefreq: 'never',
    }
  },
}).toFile(); // write sitemap.xml and robots.txt

console.log('files wrote');
*/



/*
var map = sitemap({
  //generate: app
  sitemap: 'sitemap.xml', // path for .XMLtoFile
  robots: 'robots.txt', // path for .TXTtoFile
  generate: app, // option or function, is the same
  sitemapSubmission: '/sitemap.xml', // path of sitemap into robots
  route: { // specific option for some route
    '/': {
      lastmod: '2014-06-19',
      changefreq: 'always',
      priority: 1.0,
    },
    '/admin': {
      disallow: true, // write this route to robots.txt
    },
    '/nooo': {
      lastmod: '2014-06-20',
      changefreq: 'never',
    }
  },
});
*/



app.post('/send',function(req,res){
  JSON.stringify(req.body);
    let mailOptions = {
        to : "chatbox@globalgreenbuildings.com",
        subject:"Chatbox question from " + req.body.subject,
        text : req.body.text
    }
    console.log(mailOptions);

    transporter.sendMail(mailOptions, function(error, response){
     if(error){
            return console.log(error);

     }else{
            console.log("Message sent: " + response.Message);
        res.end("sent");
         }
});
});


app.post('/appoitment_send',function(req,res){
  JSON.stringify(req.body);
    let mailOptions = {
        to : "info@globalgreenbuildings.com",
        subject: "appointment with " +req.body.email,
        text : "Name: " +req.body.name + '\n' + "" + "Phone: " + req.body.phone + '\n' + "" + "Total kWh used: " + req.body.kwh + '\n' + "" + "Chosen segment: " + req.body.selected_segment
    }
    console.log(mailOptions);

    transporter.sendMail(mailOptions, function(error, response){
     if(error){
            return console.log(error);
        //res.end("error");
     }else{
            console.log("Message sent: " + response.Message);
        res.end("appoitment_send");
         }
});
});


app.get('/contact_send',function(req,res){
  JSON.stringify(req.body);
    let mailOptions = {
        to : "info@globalgreenbuildings.com",
        subject: req.body.subject,
        text : req.body.text
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
app.get('/downloadFile', function (req, res) {
   var file = path.join(__dirname, 'VOLTAGE_AS_A_SERVICE_(more_info).pdf');
   res.download(file, function (err) {
       if (err) {
           console.log("Error loading file");
           console.log(err);
       } else {
           console.log("File was loaded");
       }
   });
});
*/
app.get('/VOLTAGE_AS_A_SERVICE_more_info', function(request, response){
  var file = path.join(__dirname, 'VOLTAGE_AS_A_SERVICE_(more_info).pdf');
  fs.readFile(file, function (err,data){
     response.contentType("application/pdf");
     response.send(data);
  });
});

app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/n_img', express.static(__dirname + '/n_img'));

app.use('/sitemap.xml', express.static(__dirname + '/sitemap.xml'));
app.use('/robots.txt', express.static(__dirname + '/robots.txt'));
app.use(express.static(path.join(__dirname, 'public')));

/*
app.use('/css', express.static('Style'));
app.use('/js', express.static('Scripts'));
app.use('/img', express.static('Images'));

*/

app.get('/', function(req, res){
   res.sendFile('index.html',{ root: __dirname });
   //res.sendFile('index.html',{"root": __dirname});
});

app.get('/index.html',function(req,res){
  res.sendFile('index.html',{ root: __dirname });
});
app.get('/idea.html',function(req,res){
  res.sendFile('idea.html',{ root: __dirname });
});
app.get('/about.html',function(req,res){
  res.sendFile('about.html',{ root: __dirname });
});
app.get('/contact.html',function(req,res){
  res.sendFile('contact.html',{ root: __dirname });
});
app.get('/segment.html',function(req,res){
  res.sendFile('segment.html',{ root: __dirname });
});
app.get('/legal.html',function(req,res){
  res.sendFile('legal.html',{ root: __dirname });
});


/*
app.get('/sitemap.xml',function(req,res){
  //res.sendFile('sitemap.xml', { root: __dirname });
  res.sendFile('sitemap.xml');
});
*/
/*
app.get('/sitemap.xml',function(req,res){
	res.set('Content-Type', 'text/xml');
    res.sendFile(fs.readFileSync('sitemap.xml', {encoding: 'utf-8'},{ root: __dirname }));
});   
*/

app.get('/robots.txt',function(req,res){
  res.sendFile('robots.txt',{ root: __dirname });
});

//Segment page
app.get('/segment.html?Offices',function(req,res){
  res.sendFile('segment.html?Offices',{ root: __dirname });
});
app.get('/segment.html?Retail',function(req,res){
  res.sendFile('segment.html?Retail',{ root: __dirname });
});
app.get('/segment.html?Hospitality',function(req,res){
  res.sendFile('segment.html?Hospitality',{ root: __dirname });
});
app.get('/segment.html?Industry',function(req,res){
  res.sendFile('segment.html?Industry',{ root: __dirname });
});
app.get('/segment.html?Renewables',function(req,res){
  res.sendFile('segment.html?Renewables',{ root: __dirname });
});
app.get('/segment.html?Other',function(req,res){
  res.sendFile('segment.html?Other',{ root: __dirname });
});

//console.log(fs.readFileSync('sitemap.xml', {encoding: 'utf-8'})); 











app.listen(3001, '127.0.0.1');
//app.listen(3001, 'www.globalgreenbuildings.com');
//app.listen(3001, '185.14.186.244');
//app.listen(8080);
console.log('Server running at https://185.14.186.244:301/');