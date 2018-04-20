/* A simple practice for mongoose operation */
"use strict"
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/test");

let schema = new Schema({
    name: String,
    age: Number,
    married: Boolean,
    courses: [String]
});

let newmodel = mongoose.model('newmodel', schema);

let example = new newmodel({
    name: "darrenzhang",
    age: 16,
    married: false,
    courses: ['CSC108', 'MAT257']
});

// example.name = "darrenzhang";
// example.age = 16;
// example.married = false;
// example.courses = ['CSC108', 'MAT257'];
// let closePromise = new Promise(function (resolve, reject) {
//
// });
example.save().then(function() {
    mongoose.connection.close(function () {
        console.log("The connection is closed!");
    });
});
