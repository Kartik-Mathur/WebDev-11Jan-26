let movies = document.querySelector('.movies');
// console.log(movies.innerHTML)

// setTimeout(()=>{
//     movies.innerHTML += '<li class="movie">Dr Strange</li>'
// },1000);


// HTML Element banaya
let li = document.createElement('li');
console.log(li)
// Uska innerText change kia
li.innerText = 'Dr STRANGEEEEEE!';
console.log(li)

// Class add kari
li.classList.add('movie');

setTimeout(()=>{
    // Append kia li ko movies ke andar
    movies.appendChild(li);
},1000);