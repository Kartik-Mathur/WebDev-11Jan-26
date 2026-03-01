let btn = document.getElementById('btn');

/*
btn.onclick = function () {
    console.log("Clicked");
}

btn.onclick = function(){
    console.log("I am clicked");
}
*/

btn.addEventListener('click', () => {
    console.log("Clicked");
})

btn.addEventListener('click', () => {
    console.log("I am clicked");
})

// document.querySelector('#mydiv')
//     .addEventListener('mouseenter', () => {
//         console.log("Mouse entered on mydiv")
//     })


// keypress, keydown, keyup
document.querySelector('body')
    .addEventListener('keypress', (ev) => {
        // jo bhi event hua uski info ev mei aaegi
        // console.log(ev);
        console.log(ev.key);
    })

document.querySelector('#inp')
    .addEventListener('focus', () => {
        console.log('Focus')
    })

document.querySelector('#inp')
    .addEventListener('blur', () => {
        console.log('blur')
    })