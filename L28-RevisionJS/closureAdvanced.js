function outerFun(){
    let cnt = 0;

    return function Fun(){
        cnt++;
        let cnt1 = 0;
        return function innerFun(){
            cnt++;

            return cnt;
        }

    }
}

let f = outerFun()
let newf = f();
let newf1 = f();

console.log(newf());
console.log(newf());
console.log(newf1());
console.log(newf());
console.log(newf1());
