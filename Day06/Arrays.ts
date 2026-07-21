/* 
    Stores multiple values in a ordered collection
    could be same or different data types
    indexing starts from 0
    declare using []
*/

// leteral
// No need of adding array size because in TS fixed size is normally with touple

/* let names:string []= [];

// Initialization
names[0] = "John";
names[1] = "Smith";
names[2] = "Peter";
names[3] = "Scott"; */

// initializing declaring together
/* let names:string[] = ["John", "Smith", "Peter", "Scott"];

console.log(names);
console.log(names[2]); */

// Using generic way
/* let empNames: Array<string> = ["John", "Smith", "Peter", "Scott"];

console.log(empNames);

let empId:Array<number> = [101, 102, 103, 104];
console.log(empId); */

/* let data:Array<string | number> = ["John", 101, "Smith", 102, "Peter", 103, "Scott"];
let info: Array<any> = ["Shane", 101, true, null] */

// print array data using traditional for loop
/* let empNames: Array<string> = ["John", "Smith", "Peter", "Scott"];
for(let i=0; i<empNames.length; i++){
    console.log(empNames[i]);    
} */

// print array data using for in loop
// here id or the variable use to capture index
/* let empId:Array<number> = [101, 102, 103, 104];
for(let id in empId){
    console.log(empId[id]);    
} */

// print array data using for of loop
// here id or the variable capture the array value
let empId:Array<number> = [101, 102, 103, 104];
for(let id of empId){
    console.log(id);
    
}

// passing an array to the function
// search an array element using a function

function search(ele:number, arr:number[]): boolean{
    for(let i =0; i<arr.length; i++){
        if(arr[i] == ele){
            return true;        
        }
    }
    return false;
}

let numbers:number[] = [10, 20, 30, 40, 50];

console.log(search(30, numbers));
console.log(search(130, numbers));

// function with return type as array
function capitalizeWords(simpleWords:string[]): string[] {
    let capitalStrings:string[] = [];
    /* let k:number = 0;
    for(let value of simpleWords){
        capitalStrings[k] = value.toUpperCase();
        k++;
    } */

    for(let k =0; k<simpleWords.length; k++){
        capitalStrings[k] = simpleWords[k].toUpperCase();
    }
    return capitalStrings;
}

let simpleWords:string[] = ["abc", "def", "ghi"];
console.log(capitalizeWords(simpleWords));


