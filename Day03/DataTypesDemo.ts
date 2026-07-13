// Premitive(Built-in) - Only single value could be assigned
/* 
Number
String
Boolean
Null
Undefined
Any
Union Type
Void
*/

/* // Number - Integers and floating point numbers
let amount:number = 6
let price = 29.99
let big = 2386382826896

console.log(amount)
console.log(price)
console.log(big)

// in order to concaternate a statement and a variable value we can simply use a comma (,) when using console.log()
console.log("Price : ", price) 
*/

/* 
// String - Set of characters (use"", Use'', use``)
let greeting:String = "Hello"
let fname:String = 'John'
let lname:String = `Kennedy`

console.log(greeting,fname,lname)

// If the concaternation is done to assign few parameterized statement to another variable,
// Then use backtilt to whole phrase and ${variableName} for the variables without comma/+
 
let Greet:String = `Hi ${fname} ${lname}`
console.log(Greet) */

/* // Boolean - True/ False
let isStudent:Boolean = true
let hasJob:Boolean = false

console.log("Is Student?", isStudent, "Has Job?", hasJob) */

/* // Null & Undefined - Not assigned
let emptyValue:null = null
let notAssigned:undefined = undefined

console.log(emptyValue)
console.log(notAssigned)

let fee:number;
console.log(fee) */

/* // Any - Use with causion as this violates type safety
let value:any = "Colombo"
console.log(value);

value = true
console.log(value);

value = 100
console.log(value);
 */

/* // Union Type - It is not a keyword. Is a set of datatypes assigned to a variable separated by pipe symbol
let address:String | number | Boolean ;

address = 225
console.log(typeof(address));

address = "Marawila"
console.log(typeof(address));

address = true
console.log(typeof(address));
 */

// Void (Optional) - used in function when the return type has no specific data type
function sum():void{
    console.log(1+2)
}

sum()

console.log(typeof(sum()));

function total():number{
    let total = 1+5
    return total;
}

console.log(total());
console.log(typeof(total()));

function add(x:number, y:number):number{
    return x+y;
}

console.log(add(5,8));
