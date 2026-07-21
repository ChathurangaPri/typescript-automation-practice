// is a fixed length of array and each value has a speific data type
// Can store elements of different data types

// ex 1 - touple with two values - first string & second number
/* let person:[string, number] = ["john", 1];

console.log(person[0]);
console.log(person[1]);
console.log(person); */

/* // tuople with multiple values
let user:[number, string, boolean, number, string] = [1, "H", true, 7, "J"];

// using traditional for loop
for(let i =0; i<user.length; i++){
    console.log(user[i]);   
}

// using traditional for in loop
for(let i in user){
    console.log(user[i]);   
}

// using traditional for of loop
for(let i of user){
    console.log(i);   
} */

// Array with touples
let student:[number, string][] = [[101, "John"], [102,"Smith"], [103,"Scott"]];
console.log(student.length);
console.log(student[1]);

// dont use this because normally this is used for 2D arrays
console.log(student[2][0]);

/* let tp = student[1];
console.log(tp[1]); */
 

