// Same function name and implementation with different signatures
// Function implementation should align withh all the data types, amount of parameters and return types of all function signatures

// Same amount of parameters, different data types
/* function getInfo(id:number):string;
function getInfo(name:string):string;

function getInfo(info:number | string):string {
    if(typeof(info) === "number"){
        return `User id ${info}`;
    }else{
        return `User name ${info}`;
    }
    
}

console.log(getInfo(1))
console.log(getInfo("Chathu")) */

// different amount of parameters
/* function add(a:number, b:number): number;
function add(a:number, b:number, c:number): number;

function add(num1:number, num2:number, num3?:number):number {
    if(num3 !== undefined){
        return num1+num2+num3;
    }else{
        return num1+num2;
    }
    
}

console.log(add(1,2));
console.log(add(1,2,3)); */

// different data type and return type
/* function processInput(str:string): string;
function processInput(id:number): number;

function processInput(input: string | number): string | number{
    if(typeof(input) === "string"){
        return input.toUpperCase();
    }else{
        return input*2;
    }
}

console.log(processInput(1));
console.log(processInput("hj")); */

// 3 different signatures
function greet(age:number):string;
function greet(name:string):string;
function greet(isMarried:boolean):string;

function greet(value: string | number | boolean):string{
    if(typeof(value) === "string"){
        return `Name: ${value}`;
    } else if(typeof(value) === "number"){
        return `Age: ${value*2}`;
    }else {
        let res:string = value? "Married": "Single";
        return res;
        
    }
}

console.log(greet(1));
console.log(greet("Cha"));
console.log(greet(true));