class Person{
    public name:string; // Accessible everywhere
    protected age:number; // Within the class and its subclasses
    private sIn:number; // Only within this class

    constructor(name:string, age:number, sIn:number){
        this.name = name;
        this.age = age;
        this.sIn = sIn;
    }

    displayInfo(){
        console.log(`${this.name}`);
        console.log(`${this.age}`);
        console.log(`${this.sIn}`);
    }
}

class Employee extends Person{
    private employeeId:number;

    constructor(name:string, age:number, sIn:number, employeeId:number){
        super(name, age, sIn);
        this.employeeId = employeeId;
    }

    show() {
        console.log(`${this.name}`);
        console.log(`${this.age}`);
        console.log(`${this.employeeId}`);       
        // console.log(`${this.sIn}`); as sIn is private this can not be acessed any other class but Person
    }
}

let emp1 = new Employee("John", 24, 111, 2222);
emp1.show();
emp1.displayInfo();

console.log(emp1.name);
// console.log(emp1.age); acessible only in Person or Employee classes
// console.log(emp1.sIn); accessible only in Person
// console.log(emp1.employeeId); accessible only in Employee



