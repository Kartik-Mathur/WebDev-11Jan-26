let codingblocks = {
    name: 'CB',
    place: 'Delhi',
    languages: ['CPP', 'Java']
}

let x = JSON.stringify(codingblocks);
console.log(x);

let y = JSON.parse(x)
console.log(y.name);