setTimeout(() => {
    console.log("Hi From setTimeout");
}, 0)

let p = new Promise((res, rej) => {
    res("Hey! i am resolved");
})

p
    .then((msg) => {
        console.log(msg)
    })
    .catch(err => {
        console.log(err)
    })

console.log("Hello World");