/* This script file is for testing the long time no operation timeout */
"use strict"
// variable for keeping track of the logging start time
let start;
// variable for keeping track of the current time.
let current;
// Time duration for timeout
let duration = 1000 * 20;

function initialstatus () {
    $('#logout').hide();
}

// When the page is ready, show the login status and hide the logout status
$(document).ready(initialstatus);

// function for updating the last time that the operation happens
$(function () {
    $(document).mouseover(function () {
        start = new Date().getTime();
    });
});

// function for testing whther it is timeout
function test () {
    current = new Date().getTime();
    if (current - start > duration) {
        $('#login').hide();
        $('#logout').show();
    }
}

window.setInterval(test, 500);
