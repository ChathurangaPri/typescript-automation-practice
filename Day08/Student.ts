class Student{
    studentName:string; // normal variable
    readonly StudentID:number; // this can not be changed and only asigned through the constructor
    email?:string; // optional variable
    static schoolName:string = "King's College"; // static is a shared variable/methods across all the objects and this could be changed through the class only
    // static variables/methods can be accessed using class name instead of this.

    constructor (studentName:string, StudentID:number, email?:string){
        this.studentName = studentName;
        this.StudentID = StudentID;
        this.email = email;
        //this.schoolName = schoolName
    }

    displayInfo():void  {
        console.log(this.StudentID);
        console.log(this.studentName);
        console.log(Student.schoolName);

        if(this.email){
            console.log(this.email);
        }else{
            console.log("Not provided");
        }
    }

    static changeSchoolName(newName:string):void{
        // this.schoolName = newName; static variables cannot be accessed using this. it should be aceessed using className.
        Student.schoolName = newName;
    }
}

let s1 = new Student("Priya", 1, "ABC@gmail.com");
let s2 = new Student("Pri", 2);

s2.displayInfo();
s1.displayInfo();

// s1.StudentID = 23; can not change readonly properties

// change the school name using static method
// this could be acessed directly by the class not the object
Student.changeSchoolName("Auckland Grammar");
console.log(Student.schoolName);
s1.displayInfo();