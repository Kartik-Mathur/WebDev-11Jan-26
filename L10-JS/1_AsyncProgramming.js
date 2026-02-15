// setTimeout(function, timeInMilliSeconds); 
setTimeout(function hello() {
    console.log("Done")
}, 3000);

setTimeout(function hello() {
    console.log("Ho gaya")
}, 2500);

setTimeout(function world(){
    console.log("World")
}, 4000)


// console.log("Hello");
// function waitASec() {
//     let t = new Date().getTime();
//     while (new Date().getTime() - t < 1000) {

//     }
// }

// function waitNSec(n) {
//     for (let i = 0; i < n; i++) waitASec();
// }

// waitNSec(5);
