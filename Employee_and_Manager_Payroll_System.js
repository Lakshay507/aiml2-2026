// 3. Employee and Manager Payroll System
// Create a base class Employee containing id, name, and basicSalary. Initialize them using a constructor and create a method calculateSalary() that returns the basic salary. Create a derived class Manager that adds an incentive property. Use super() to initialize inherited properties and override calculateSalary() so that a manager's total salary is calculated as basicSalary + incentive. Create objects of both classes and display their salaries.
// Concepts Covered: Inheritance, extends, super(), Constructor, Method Overriding

class Employee {
    constructor(id,name,basicSalary){
        this.id=id;
        this.name=name;
        this.basicSalary=basicSalary;
    }
    calculateSalary(){
        console.log("basic salary :"+this.basicSalary);
    }
}

class Manager extends Employee {
    constructor(id,name,basicSalary,incentive){
        super(id,name,basicSalary);
        this.incentive=incentive;
    }
    calculateSalary(){
        console.log("total salary :"+(this.basicSalary+this.incentive));
    }
}
 let e1=new Employee(101,"vikas",100);
 let m1=new Manager(102,"vivek",100,50);
 e1.calculateSalary();
 m1.calculateSalary();