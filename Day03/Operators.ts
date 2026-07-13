let a:number = 10 , b:number = 20

/* // Arithmatic operators
console.log(a+b); // addition 30
console.log(a-b); // substraction -10
console.log(a*b); // multiplication 200
console.log(a/b); // division 0.5
console.log(a%b); // modulus 10
console.log(5**2); // exponent 25 */

/* // Assignment operators/ Short hand operators
a=a+b //Assignment operators
console.log(a); // 30

a+=b // Short hand operators
console.log(a); // 50 */

/* // Relational operators - comparison - Boolean output true? false
console.log(a>b); // false
console.log(a<b); // true
console.log(a>=b); // false
console.log(a<=b); // true
console.log(a==b); // False

// == vs === (strict equality)
let num1:any = 10
let num2:any = "10"

console.log(num1==num2); // double equql only consider the value - true
console.log(num1===num2); // triple equql compares data type as well - false */


// Logical operators - & | ! - return true/ false
/* 
    B1  B2  &&   ||   
    T   T   T    T
    T   F   F    T
    F   T   F    T
    F   F   F    F

    !B1 = T
    !B2 = T
*/

let b1:boolean = true, b2:boolean = true
console.log(b1 && b2); // true
console.log(b1 || b2); // true

b1 = true, b2 = false
console.log(b1 && b2); // false
console.log(b1 || b2); // true

b1 = false, b2 = true
console.log(b1 && b2); // false
console.log(b1 || b2); // true

b1 = false, b2 = false
console.log(b1 && b2); // false
console.log(b1 || b2); // false

console.log(!b1);
console.log(!b2);

// Combination of logical and relational operators
let c1:number = 3, c2:number = 7
console.log(c1<c2 && c2-c1>1);

console.log(5<2 || 8>10);

/* // increment (++) and decrement (--) operators
// pre increment - Already one is added to the variable
// post increment - the value increse by one at the next execution line

let x:number = 10
let summation:number = ++x
console.log(summation);

x =10;

summation = x++
console.log(summation);


// pre decrement - Already one is substracted to the variable
// post decrement - the value substracted by one at the next execution line

x =10;

summation = --x
console.log(summation);

x =10;

summation = x--
console.log(summation); */

// Ternary operator - expression ? true operation : false operation
let h:number = 100, j:number = 200

let res:number = (h>j) ? h : j
console.log(res);

let old:number = 27
let isAproved:string = (27>=18) ? "Adult" : "Child"
console.log(isAproved);
