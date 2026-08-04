// Objects - Set of properties and behaviour
// Contains variables and methods
// Is a collection of key and value pairs

/* Different ways to create an object
1. Using Objcet type - directly define the values for variables (JS/TS)
2. Inline type object - define data type of the keys (TS)
3. Using type aliases() (JS/TS)
4. Using the classes (JS E16/ TS)
*/

// 1. Using Objcet type - directly define the values for variables (JS/TS)
// TS object type represent all values that are not in primitive types

let employee2: object = {name : "John", age: 30, salary: 50000, job:"Engineer"} // if the object keyword is used methods can not be defined

let employee = {name : "John", 
                age: 30, 
                salary: 50000, 
                job:"Engineer",
                getDetails : function():string{
                    
                    return `${this.name} ${this.age} ${this.salary} ${this.job}`;
                    
                }} // if the object keyword is not used methods also can be define

console.log(typeof(employee));

// acees object using dot notation
console.log(employee.name); // objectName.variableName
console.log(employee.getDetails());

// access object using [""]
console.log(employee["name"]); // objectName["variableName"]
console.log(employee["getDetails"]());

// modify the vallue using dot notation
employee.job = "Manager"
console.log(employee.job);

// modify the vallue using [""] notation
employee["job"] = "Manager"
console.log(employee["job"]);


// =======================================================================
// 2. Inline type object - define data type of the keys (TS)
let student : {
    name:string,
    age:number,
    grade:number,
    getSummary: ()=>string
} = {
    name : "Smith",
    age : 15,
    grade: 78,
    getSummary:function(){
        return `${this.name} ${this.age} ${this.grade}`
    } 
}

console.log(student.getSummary());
console.log(student["getSummary"]());


// =======================================================================
// 3. Using type aliases() (JS/TS)

type product = {
    name:string,
    price:number,
    getInfo:()=>string
}

let book1:product = {
    name:"Dictionary",
    price:100,
    getInfo: function(){
        return `${this.name}`;        
    }
}

let book2:product = {
    name:"Learn TypeScript",
    price:100,
    getInfo: function(){
        return `${this.name}`;        
    }
}

console.log(book1.getInfo());
console.log(book2.getInfo());


// Intersection Type
type personal = {
    name:string,
    age:number
}

type contact ={
    email:string,
    phone:number
}

// two types are interconnected using &
// also getContactInfo () is also combined using &
type candidate = personal & contact & {
    getContactInfo: ()=>string
}

let emp1:candidate = {
    name:"Sam",
    age:20,
    email:"sam@gmail.com",
    phone:1234567890,
    getContactInfo: function(){
        return `${this.name} ${this.age} ${this.email} ${this.phone}`;
    }
}

console.log(emp1.getContactInfo());


// ===============================MOST IMPORTANT========================================
// 4. Using the classes (JS E16/ TS) - use class key word
class Person{
    ssn:string;
    fName:string;
    lName:string;

    constructor (ssn:string, fName:string, lName:string){
        this.ssn = ssn;
        this.fName = fName;
        this.lName = lName
    }

    getFullName():string{
        return `${this.fName} ${this.lName}`
    }

    getContactDetails():string{
        return `${this.ssn} ${this.getFullName()}`;
    }
}

let person1 = new Person("45", "Chat", "Priya");
console.log(person1.getContactDetails());
