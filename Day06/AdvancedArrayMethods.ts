// forEach(), map(), filter(), reduce(), some(), every()
// all these methods accept a function as a parameter

// array.forEach(function(currentValue, index, array){})
// executes the function for each array element
// currentValue - represents the current value

/*
let fruits: string[]= ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
for(let i =0; i<fruits.length; i++){
    console.log(i,fruits[i]);  
}

//  forEach() - anonymous function
fruits.forEach(function(element, index){
    console.log(`${index} ${element}`);    
})

//  forEach() - arrow function
fruits.forEach((element, index) => {
    console.log(`${index} ${element}`);    
})

fruits.forEach(function(value){
    console.log(value.toUpperCase());
    
}) */

// array.map(function(currentValue, index, array){})
// creates a new array with the result of calling the function on every element of an array with the original array length

/* let numbers:number[] = [1,2,3,4,5];
let newNumbers:number[] = numbers.map((value, index, newNumbers) => {
    return value*value;   
})
console.log(newNumbers); */

// array.filter(function(element){})
// creates a new array with all the elements that pass/ satisfy the function
/* let numbers:number[] = [1,2,3,4,5];
let evenNumbers:number[] = numbers.filter((element) => (element % 2 == 0))
console.log(evenNumbers);

let greater:number[] = numbers.filter((value) => (value>3));
console.log(greater);
 */


// array.reduce(function(accumulator, currentvalue, index, array){})
// applies a function of every single array element and returns a single value
// accumulator is the variable where the result is stored every iteration
/* let numbers:number[] = [1,2,3,4,5];
// let sum:number = 0;
let result = numbers.reduce((sum, element) =>  sum+=element, 5); // if variable sum is not explicitely initiated to 0 it automatically initiate it to 0 if not we can initiate the value of sum after return statement in => function or after {} in annonymous function
console.log(result); */


// array.some(value, index, array)
// returns true if any array element matches the function if else return false
let numbersArray:number[] = [0,2,8,4,10];
/* let isElementPresent:boolean = numbersArray.some((value) => value==3);
console.log(isElementPresent);

let isNegative:boolean = numbersArray.some((value) => value<0);
console.log(isNegative); */

// array.every(value, index, array)
// checks if all the elements of an array satisfy the condition
let areAllEven:boolean = numbersArray.every((value) => value%2 == 0);
console.log(areAllEven);

let allGreater: boolean = numbersArray.every((value) => value>1);
console.log(allGreater);

