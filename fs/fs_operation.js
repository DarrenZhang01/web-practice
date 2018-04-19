/* Only used for testing the fs methods in nodejs */
"use strict"
let fs = require('fs');

// Rename the file rename into new name
fs.rename("rename", "newname", function(error) {
    if (error) {
        throw error;
    }
    console.log("renaming successfully!");
});

// Check the existence of the file
fs.stat("newname", function (error, status) {
    if (error) {
        throw error;
    }
    console.log(`The file exists: ${JSON.stringify(status)}`);
});

// Open the file, read it and close it.
fs.open('newname', 'r', function (error, fd) {
    if (error) {
        throw error;
    }
    console.log("The file is opened successfully!");
    fs.close(fd, function (err) {
        if (err) {
            throw err;
        }
        console.log("The file is closed successfully!");
    })
});
