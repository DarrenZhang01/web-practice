/* This file is for displaying ajax request */
"use strict"
/* There is a browser side js file for sending ajax request, and
    this server side js file is for receiving information from the ajax */
let http = require("http");

function server (request, response) {

}

let app = http.createServer(server);
app.listen(4001);
