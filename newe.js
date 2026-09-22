class hello {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }
}
class Hello {
    static faculty="vikas";
}

let obj1 = new Hello();
console.log(Hello.faculty);
let obj2 = new hello("LAKSHAY");

class student{
    constructor(roll,Name,year){
        this.ROLL=roll;
        this.NAME=Name;
        this.YEAR=year;
        console.log(this.ROLL);
        console.log(this.NAME);
        console.log(this.YEAR);
    }
}
let a= new student(101,"vikas",2);
let b= new student(102,"vivek",3);

class Student{
    constructor(roll,Name,year){
        this.ROLL=roll;
        this.NAME=Name;
        this.YEAR=year;
        
    }
      display(){
        console.log(this.ROLL);
        console.log(this.NAME);
        console.log(this.YEAR);
}}
let c= new Student(101,"vikas",2);
c.display();
let d= new Student(102,"vivek",3);
d.display();    


class hell{
    constructor(){
        console.log("hello");
    }
}
class hi extends hell{
    constructor(){
        super();
        console.log("hi");
    }
}
let obj3 = new hi();
class HELL{
    info(){
        console.log("hello");
    }
}
class HI extends HELL{
    info(){
        super().info();
        console.log("hi");
    }
}
let obj4 = new HI();