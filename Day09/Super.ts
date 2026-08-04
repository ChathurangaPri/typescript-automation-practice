// super method should be called in the child class constructor to call parent class constructr and it shold be the first line in child class constructor
// super keyword can not be used to acess parent class attributes in JS & TS but in Java we can
// But parent class methods can be evoked using super
class Parent{
    num:number = 10;

    constructor(){
        console.log("This is parent class constructor.");
        
    }

    display(){
        console.log("This is display() of parent class.");
        
    }

}

class Child extends Parent{
    num:number = 20;
    constructor(){
        super(); // super method should be called in the child class constructor to call parent class constructr and it shold be the first line in child class constructor
        console.log("This is child class constructor.");
        
    }

    show(){
        console.log("This is child class show() method.");
        console.log(this.num);
        // console.log(super.num); This can not be used in JS & TS to access parent class variables
        super.display(); // But parent class methods can be evoked using super
    }

    // Overriden method
    display(){
        console.log("This is child class display() method.");
        
    }
}

let child1 = new Child();
child1.show();
// child1.display();
