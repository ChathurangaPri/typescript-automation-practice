// if condition
let age:number = 5;

if(age>=20){
    console.log("Eligible for voting");
}
// if else condition
if(age>=20){
    console.log("Eligible for voting");
}else{
    console.log("Not eligible for voting");
    
}

let num:number = 67;

if(num%2 == 0){
    console.log(`Even : ${num}`);
}else{
    console.log(`Odd : ${num}`);
}

// nested if else
let marks:number = 78
if(marks>=90){
    console.log("Grade - A");
}else if(marks>=75){
    console.log("Grade - B");
}else if(marks>=60){
    console.log("Grade - C");
}else{
    console.log("Grade - D");
}

let browserSelection:String = "Chrome";

if (browserSelection === "Chrome"){
    console.log("Browsr is Chrome");   
}else if (browserSelection === "Firefox"){
    console.log("Browsr is Firefox");   
}else if (browserSelection === "Safari"){
    console.log("Browsr is Safari");   
}else{
    console.log("Some other browser");    
}

// switch case
let day:number = 0

switch(day){
    case (1):{
        console.log("Monday");   
        break;     
    }
    case (2):{
        console.log("TuesDay");  
        break;        
    }
    case (3):{
        console.log("WednesDay");   
        break;       
    }
    case (4):{
        console.log("ThursDay"); 
        break;         
    }
    case (5):{
        console.log("FriDay");      
        break;    
    }
    case (6):{
        console.log("SaturDay");  
        break;        
    }
    case (7):{
        console.log("SunDay");   
        break;       
    }
    default:{
        console.log("Unknown");
        
    }
}

// switch case with expression
let x:number = 10, y:number = 5

switch (x-y) {
    case 0:
        console.log("Result is 0");        
        break;
    case 5:
        console.log("Result is 5");
        break;
    case 10:
        console.log("Result is 10");
        break;
    default:
        console.log("Something else");        
}