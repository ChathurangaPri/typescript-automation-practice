/* 
Variable is a container storing some value.
Key Words - var let const
Syntax - key word variable name :data type(optional)=value
Ex - var age :number=10 [with data type]
    var age=10 [with data type]
*/

var age :number=10
console.log(age)

/* 
var - in modern typescript/ javascript we trey to avoid this due to function scope and can lead to unexpected errors
let - use when variable value is changing
const - use when variable value is constant
 */

/*                     
                                            var vs                          let vs                          const
    Scope                                   Functional                      Block                           Block
    Declaration and initialization          can be without initializing     can be without initializing     should be initialized
    Re-Declaration                          can                             can not                         can not
    Re-Initialization                       can                             can                             can not
    Hoisting                                undefined                       not initialized                 not initialized
*/

// Scope - Accessible area (functional scope, block scope) ----------------------------------------------------------
// var - functional - the variables can be accessed in the block and in the function
function varScope(){
    if(true){
       var msg= "Hello World"
        // console.log(msg)
    }
    console.log(msg)
}

varScope()

// let - block - the variables can be accessed only in the block
function letScope(){
    if(true){
        let day="12/07/2026"
        console.log(day)
    }
    //console.log(day)
}

letScope()

// const - block - the variables can be accessed only in the block
function constScope(){
    if(true){
        const pi=3.14
        console.log(pi)
    }
    // console.log(pi)
}

constScope()

// Declaration --------------------------------------------------
// var - can be declared without intialization
var x;
console.log(x)

// let - can be declared without intialization
let y;
console.log(y)

// let - can not be declared without intialization
/* const z;
console.log(y) */

// Re-Declaration ----------------------------------------------------
// var - can be re-declared - not type safety
var a = 10
var a = 20
console.log(a)

// let - can not be re-declared
/* let b = "Hello"
let b = " World"
console.log(b) */

// const - can not be re-declared
/* const h = 1
const h = 1
console.log(h) */

// Re-Initialization --------------------------------------
// var - can re-initialized
var j = 10
j=8
console.log(j)

// let - can re-initialized
let m = 11
m=12
console.log(m)

// const - can re-initialized
/* const h = 10
h=8
console.log(h) */

// Hoisting - using a variable before declaring -----------------------
// var - undefined
/* console.log(p)
var p = 2
console.log(p) */

// let - not initialized runtime error
/* console.log(q)
let q = 2
console.log(q)
 */

// const - not initialized runtime error
/* console.log(r)
const r = 2
console.log(r) */