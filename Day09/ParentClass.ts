/* 
 Use extends keyword
 in the child class constructor parent class attributes should also be passed for this use super()
*/
class Car{
    name:string;
    color:string;
    model:string;

    constructor(name:string, color:string, model:string){
        this.name = name;
        this.color = color;
        this.model = model;
    }


    start(){
        console.log("Car started");
            
    }

    stop(){
        console.log("Car stopped");
            
    }

    displayInformation(){
        console.log(`Name: &{this.name} Color: ${this.color} Model: ${this.model}`);
            
    }

}

class Honda extends Car{
    year:number;

    constructor(name:string, color:string, model:string, year:number){
        super(name,color,model);
        this.year = year;
    }


    start(){
        console.log("Honda started");
            
    }

    yom(){
        console.log("Car stopped");
            
    }

    displayInformation(){
        console.log(`Name: ${this.name} Color: ${this.color} Model: ${this.model} Year: ${this.year}`);
            
    }

}

class Toyota extends Car{

    year:number;

    constructor (name: string, color:string, model:string, year:number){
        super(name, color, model);
        this.year = year;
    }

    yom(year:number){
        console.log(`Year: ${this.year}`);
        
    }

    start(){
        console.log("Toyota started.");
        
    }

    displayInformation(){
        console.log(`Name: ${this.name} Color: ${this.color} Model: ${this.model} Year: ${this.year}`);
        
    }
}

    
/* let honda1 = new Honda("Honda", "As", "Red", 1997);
honda1.displayInformation();
console.log(honda1.name);
honda1.start();
honda1.stop();


let toyota1 = new Toyota("Toyota", "Maroon", "Prius", 2012);
toyota1.start();
toyota1.stop();
toyota1.displayInformation();
 */

// parent class variable holding child class object
// only the parent class / both class objects and methods are accessible not child class attributes or methods
let toyota2:Car = new Toyota("Toyota", "Ash", "Corolla", 1995);
toyota2.displayInformation();
toyota2.start();

