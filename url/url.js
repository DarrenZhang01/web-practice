/* This file is only used for testing the url module */
"use strict"
let {URL} = require("url");
// Use an example
let example = new URL("https://darren:zhang@www.google.ca:8080/search?source=hp#hash")

console.log("The protocol: --- " + example.protocol);
console.log("The username: --- " + example.username);
console.log("The hostname: --- " + example.hostname);
console.log("The host: --- " + example.host);
console.log("The port: --- " + example.port);
console.log("The pathname: --- " + example.pathname);
console.log("The search: --- " + example.search);
console.log("The hash: --- " + example.hash);
