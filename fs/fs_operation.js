/* Only used for testing the fs methods in nodejs */
"use strict"
let fs = require('fs');

fs.rename("rename", "newname", function(err) {
    if (err) {
        throw err;
    }
    console.log("renaming successfully!");
});
