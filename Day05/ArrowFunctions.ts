/* 
    Arrow/ Lambda function
    Lambda means anonnymous functions in programming
    Consists of variable, parameters, fat arrow, goes to operator/ lambda operator, statements

    *Syntax*

    let variable name = (parameters) => {
        statements
    }
*/

/* let greet = ():void => {
    console.log("Hello arrow function");    
}

greet(); */

// with parameters and return value
/* let sum = (a:number, b:number):number => {
    return a+b;
}

console.log(sum(39,7)); */

// arrow function with implicit return
// this is used when there is only one return statement inside the function. Then we can omit curly braces and return

/* let sum = (a:number, b:number):number => a+b;
console.log(sum(39,7));

let multiply = (a:number, b:number):number => a*b;
console.log(multiply(2,8)); */

// arrow function with optional parameters
// optional parameters should be at the very end of the parameter list. if the first one is optional all thers should be optional
let displayDetails = (name:string, id:number, mailId?:String) => {
    console.log(name);
    console.log(id);
    
    if(mailId !== undefined)
        console.log(mailId);
           
}

displayDetails("Chathu", 225)

// arrow functions with default parameters
let discount = (price:number, rate:number=0.15) => price*rate;
console.log(discount(100));

// arrow function with rest parameters
let sum = (...nums:number[]):number => {
    let total = 0;
    for(let i =0 ; i<nums.length; i++){
        total += nums[i];
    }
    return total;
    
}

console.log(sum(1,2,3,4,5,6,7));
;