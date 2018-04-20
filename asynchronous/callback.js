/* This file is for show the callback function,
    which is the most basic asynchronous realization in javascript */

function event1 (event) {
    console.log("The event1 function is being executed!");
    setTimeout(function() {
        console.log("The event2 function is gonna be executed!");
        event();
    }, 5000);
    console.log("This part is gonna be finished earlier that setTimeout!");
}

function event2 () {
    console.log("The event2 function is being executed!");
}

event1(event2);

console.log("This part is also earlier than event2!");
