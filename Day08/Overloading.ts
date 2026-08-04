class Calculator{

    // Constructor overloading
    constructor ();
    constructor (a:number, b:number);

    constructor (a?:number, b?:number){
        if(a!==undefined && b!==undefined){
            console.log("Sum of a & b: ", (a+b));           
        }else{
            console.log("Default constructor");
            
        }
    }

    // Method Overloading
    add(a:number, b:number):number;
    add(a:number, b:number, c:number):number;

    add(a:number, b:number, c?:number):number{
        if(c!==undefined){
            return a+b+c;
        }else{
            return a+b;
        }
    }
}

let cal1 = new Calculator();
let cal2 = new Calculator(3,6);

console.log(cal2.add(1,2,3));
console.log(cal2.add(1,2));
