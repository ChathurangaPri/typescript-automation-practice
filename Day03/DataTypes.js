// TS is a statically typed programminh language
// When using node command to run it applies type erasure mechanism and treat the file like a js file avoiding the data types so no run time error would be shown
// however if we compile the ts file using tsc and then run it using ts-node then it will give the run time error
/* let no2 = 1;
console.log(typeof (no2));
no2 = "one";
console.log(typeof (no2));
console.log(no2); */

// not type safety
let message = "Hello"
let count = 10

message = 100

let result = "7"+8
console.log(result)