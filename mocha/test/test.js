"use strict"
/* This file is for testing expect statement */
let expect = require("chai").expect;

describe ("Testing the expect - not equal", function () {
    it ("4 not equal 5", function () {
        expect(4).to.be.not.equal(5);
    });
    it ("true not equal false", function () {
        expect(true).to.be.not.equal(false);
    });
    it ("false is not ok", function () {
        expect(false).to.not.be.ok;
    });
});

let mocha;

describe ("Check the Type!", function () {
    it ("Check String type", function () {
        expect('string').to.be.a('string');
    });
    it ("Check boolean type", function () {
        expect(false).to.be.a('boolean');
    });
    it ("Check undefined", function () {
        expect(mocha).to.be.a('undefined');
    });
    it ("Check number type", function () {
        expect(9).to.be.a('number');
    });
    it ("Check object", function () {
        expect({"a": "b"}).to.be.an('object');
    });
});
