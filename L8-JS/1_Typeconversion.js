console.log("5 == 5", 5 == 5);
console.log("'5' == 5", '5' == 5); // Bada datatype gets converted to smaller one
console.log("'5' === 5", '5' === 5);

let x = 10;
let y = 10;
console.log("x == y", x == y);

// BOTH the arrays have different memory but same values, thus comparison will give false as 
// address are different.
let arr = [1, 2, 3, 4];
let arr1 = [1, 2, 3, 4];
let arr2 = arr;
console.log("arr == arr1", arr == arr1);
console.log("arr2 == arr", arr2 == arr);

console.log("0 == []", 0 == [])
console.log("0 === []", 0 === [])
console.log("+[]", +[]); // Array ko integer mei convert karna
console.log("0 == {}", 0 == {});
console.log("+{}", +{}); // Converts object to a number-> NaN
console.log("+'5'", +'5');

console.log("\\t == 0", 0 == '\t');
console.log("\\n == 0", 0 == '\n');
console.log("\\t == \\n", '\n' == '\t');

console.log("+[1,2]", +[1, 2]); // NaN
console.log("+[[]]", +[[]]); // 0
console.log("+[[], []]", +[[], []]); // NaN