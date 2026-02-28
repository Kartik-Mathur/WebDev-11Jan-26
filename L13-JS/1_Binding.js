function person() {
    console.log(this.name)
    console.log(this.age)
}

let s = {
    name: 'Ankit',
    age: 19
}

let s1 = {
    name: 'Pooja',
    age: 19
}


person.call(s);
person.call(s1);