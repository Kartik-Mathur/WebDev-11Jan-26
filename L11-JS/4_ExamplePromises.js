let p = new Promise(function (res, rej) {
    res("Hi");
})

    p.then(msg => {
        console.log(msg)
        return "How are you?"
    })
    .then(msg => {
        console.log(msg)
    })

// p.then((msg) => {
//     console.log(msg)
// })

// p.then(function (msg) {
//     console.log(msg)
// })

// p.then(function solve(msg) {
//     console.log(msg)
// })