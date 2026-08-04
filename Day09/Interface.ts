/* 
    An interface is a way to define the structure of an object
    Its like a blueprint of an object
    This tells the compiler which propertiece and types an object have

    Abstract method: only the signature of a method no implementation

    interface interfaceName{
        propertiese(regular, optional, readonly)
        abstract methods
    }

    readonly propertiese & functional types
    extending interfaces
    class implements interface
*/

interface People{
    name:string;
    age:number;
}

let student: People = {
    name:'John',
    age : 18
}

console.log(student.name);
console.log(student.age);

interface Employees{
    ename:string;
    eid:number;
    department?:string; //optional propertiese
}

let emp0:Employees = {
    ename:"Smith",
    eid:101,
    department:"Health"
}

console.log(emp0.ename);
console.log(emp0.eid);
console.log(emp0.department);


// readonly property
interface Book{
    title:string;
    readonly isbn: number;

    display():void // abstract method
}

let book1:Book = {
    title:"Dictionary",
    isbn:2020,

    display(){
        console.log(book1.title, book1.isbn);
    }
}

console.log(book1.title);
console.log(book1.isbn);
book1.display();

console.log("After re initialization");
book1.title = "ABC";
console.log(book1.title);

// book1.isbn = 3030; can not be re initialized due to readonly property


