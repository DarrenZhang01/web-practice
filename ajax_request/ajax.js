/* This file is for displaying ajax request */
"use strict"
/* There is a browser side js file for sending ajax request, and
    this server side js file is for receiving information from the ajax */
// let http = require("http");
// let fs = require('fs');
//
// function server (request, response) {
//     console.log("The request is received!");
//     console.log("The url is: " + request.url);
//     if (request.url == '/test/ajax') {
//         console.log("The ajax request is received!");
//         response.send("Successful!");
//         response.end();
//     }
// }
//
// let app = http.createServer(server);
// app.listen(4001);

let express = require("express");
let app = new express();
var bodyParser = require('body-parser');

app.use(bodyParser.text({ type: 'text/html' }));
/* Access Allow Control Origin (CORS) Set Up */
app.use(function (req, res, next) {

	res.setHeader('Access-Control-Allow-Origin', 'http://www.darrenzhang.com');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");

	next();
});

app.post('/test/ajax', function (request, response) {
    console.log("The request is received!");
    console.log("The url is: " + request.url);
    // console.log("The request data: " + request.body.data);
    let body;
    request.on('data', function (chunk) {
		console.log("The JSON obejct: " + chunk);
		let body = JSON.parse(chunk);
		console.log("The first item the user input: " + body.object1);
		console.log("The first item the user input: " + body.object2);
		console.log("The first item the user input: " + body.object3);
    });
    // request.on('end', function () {
    //     console.log("The body: " + Buffer.concat(body).toString());
    // });
    response.status(200);
    response.send("Successful!");
    response.end();
});

app.listen(4001);
