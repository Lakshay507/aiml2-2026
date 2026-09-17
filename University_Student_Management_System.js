// Create a class Student having rollNo, name, and marks. Initialize these properties using a constructor. Create an instance method displayResult() that displays student details and determines whether the student has passed. Create a static property/method to maintain and display the total number of Student objects created. Create at least three Student objects and demonstrate all methods.
// Concepts Covered: Class, Object, Constructor, Instance Method, Static Method

class Student {
    static total=0;
    constructor(roll_no,name,marks){
        this.rollno=roll_no;
        this.name=name;
        this.marks=marks;
        Student.total++;
    }
    display(){
        console.log("roll no :"+this.rollno);
        console.log("name :"+this.name);
        console.log("marks :"+this.marks);
        console.log("total students :"+Student.total);
        if(this.marks<33){
            console.log("fail");

        }else {
            console.log("pass")
        }
    }
}
 let a1= new Student(101,"vikas",32);
 let a2= new Student(102,"vivek",60);
 let a3= new Student(103,"lakshay",100);
 a1.display();
 a2.display();
 a3.display();