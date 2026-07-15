// Named Functions - A function declared with a name

/* function display(): void {
    console.log("Welcome to Type Script Functions");
    
}

display() */

// functions is a set of codes - can create without objects
// methods are a set of codes - comes in oop with objects


// functions with parameters
/* function addNumbers(x:number, y:number): number {
    return x+y;
}

console.log(addNumbers(4,8)); */

// functions with rest parameters
// rest parameters - dont restrict the number values passed to the function
// using ...parameterName:dataType[]

/* function summation(...nums:number[]): number {
    let sum:number = 0;
    
    for(let i:number = 0; i<nums.length; i++){
        sum += nums[i];
    }
    return sum;
} 
console.log(summation(1,2,3,4,5,6,7));
*/

// named functions with rest parameters - various types
/* function findElements(...elements:(string | number)[]):number [] {
    
    
    let i:number = 0
    let numerical:number=0
    let character:number =0
    for(i;i<elements.length; i++){
        if(typeof(elements[i]) == "number"){
            numerical+=1;       
        }else{
            character+=1;       
        }
    }
    
    return [character , numerical, elements.length] ;
    
}
console.log(findElements(45,"gh", 6,7,"tr"));
 */

// named functions with optional parameters
// ?
// optional parameters should be at the very end of the parameter list. if the first one is optional all thers should be optional
/* function displayDetails(id:number, name:string, mailId?: string):void{
    console.log(`${id}`);  
    console.log(`${name}`); 

    if(mailId !== undefined){
         console.log(`${mailId}`);
    }
     
}

displayDetails(225, "Chathu") */

// named functions with default parameters
// simply give a default value to the parameter at declaration of the function parameters
function calculateDiscount(price: number, rate:number=0.15):void{
    console.log("Discount: ", price*rate);
    
}

calculateDiscount(600,0.3)