// Promises ke through also we can write async code.
/*
Promise kia:  Agle sunday ko jaenge ghumne... 
Sunday ko promise toot jaega ya poora ho jaega

States of promise:
1. Pending
2. FulFill
3. Reject
*/



/*
    p
    .then(resolveFunctionDefineKaro)
    .catch(rejectFunctionDefineKaro)

    p.then(resolveFunctionDefineKaro, rejectFunctionDefineKaro);
*/

let p = new Promise(function (resolve, reject) {
    let number = 18;
    if (number % 2 == 0) {
        resolve("Yaay! Even Number aa gaya");
    }
    else {
        reject("Promise poora nhi hua")
    }
})

    p
    .then(function (msg) {
        console.log(msg)
    })
    .catch(function (err) {
        console.log(err)
    })

console.log("Hello World");

function waitASec() {
    let t = new Date().getTime();
    while (new Date().getTime() - t < 1000) {

    }
}

function waitNSec(n) {
    for (let i = 0; i < n; i++) waitASec();
}

waitNSec(5);
