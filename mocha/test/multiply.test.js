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
    it ("2 times 4 should equal 8 ", function () {
        expect(multiply(2, 4)).to.be.equal(8);
    });
    it ("1 times 10 should equal 10 ", function () {
        expect(multiply(1, 10)).to.be.equal(10);
    });
});
