/* This scripting file is used for testing multiply.js */
"use strict"
// let mocha = require("mocha");
// let describe = mocha.describe;
// let it = mocha.it;
let multiply = require("./multiply.js");
let expect = require("chai").expect;

describe ("Testing for function multiply!", function () {
    it ("3 times 4 should equal 12 ", function () {
        expect(multiply(3, 4)).to.be.equal(12);
    });
});
