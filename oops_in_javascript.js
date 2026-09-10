class student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    display(){
        console.log("Student Name: ", this.name);
        console.log("Student Roll No: ", this.rollNo);
    }
    Hello(){
        console.log("Hello, "+this.name+"!");
    }
};
let student1 = new student("vikas", 101);
let student2 = new student("vivek", 102);
student1.display();
student2.display();
student1.Hello();
student2.Hello();