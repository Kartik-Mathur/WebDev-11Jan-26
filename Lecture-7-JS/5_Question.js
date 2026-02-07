let url = [
    'http://codingblocks.com/courses/cpp',
    'http://codingblocks.com/courses/java',
    'http://codingblocks.com/courses/python',
    'http://codingblocks.com/mentors/abhishek',
    'http://codingblocks.com/mentors/mosina',
    'http://codingblocks.com/mentors/kartik',
]

/* 
    OUTPUT REQUIRED:
    {
        "codingblocks":{
            "courses": ['cpp', 'java', 'python'],
            "mentor": ['abhishek', 'mosina', 'kartik'],
        }
    }
*/
let y = {};

for (let i = 0; i < url.length; i++) {
    let s = url[i];

    let a = s.split('/');
    // console.log(a);

    let b = a[2].split('.');
    let k = b[0];

    if (!y[k]) {
        y[k] = {}
    }

    let category = a[3];
    let item = a[4];

    if (!y[k][category]) {
        y[k][category] = []
    }

    y[k][category].push(item);
}


console.log(y)
console.log(y["codingblocks"]['courses']);
console.log(y["codingblocks"]['mentors']);