"use strict"
/* A simple web server using express */
let express = require("express");
// Construct a new express instance
let app = new express();

// Router below for reacting to different routes
app.get('/', function (request, response) {
    console.log("------------ We are getting the request! ------------");
    console.log("The request is: " + request.url);
    response.write("You are calling the root route!");
    response.end();
    console.log("------------ The response has been sent! ------------");
});

app.get('/darren', function (request, response) {
    console.log("------------ We are getting the request! ------------");
    console.log("The request is: " + request.url);
    response.write("You are calling the route: '/darren'");
    response.end();
    console.log("------------ The response has been sent! ------------");
});

app.listen(4001);
