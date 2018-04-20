/* A simple Promise showcase */

let x;
let y;

let promise1 = new Promise(function(resolve, reject) {
    console.log("The first promise is being created!");
    let xResolve = false;
    let i = 0;
    while (i < 500000000) {
        if (i == 499999999) {
            x = 10;
            xResolve = true;
        }
        i++;
    }
    if (xResolve == true) {
        resolve(x);
    } else {
        reject("x promise is rejected!");
    }
});

let promise2 = new Promise(function(resolve, reject) {
    console.log("The second promise is being created!");
    let yResolve = false;
    let j = 0;
    while (j < 500000000) {
        if (j == 499999999) {
            y = 10;
            yResolve = true;
        }
        j++;
    }
    if (yResolve == true) {
        resolve(y);
    } else {
        reject("y promise is rejected!");
    }
});

Promise.all([promise1, promise2]).then(function (values) {
    console.log("All of the two promises are resolved!");
    let sum = values[0] + values[1];
    console.log("The sum of the two values: " + sum);
}, function () {
    console.log("At least one of the promises is rejected!");
});
