let onlineShopping = new Object();
onlineShopping.name = "John";
onlineShopping.age = 21;
onlineShopping.salary = function () {
    console.log("Salary is 10000");
};

console.log(onlineShopping.name);
onlineShopping.salary();
console.log(onlineShopping.age);

function Student(product_id,product_name,product_price,product_quantity) {
    this.product_id = product_id;
    this.product_name = product_name;
    this.product_price = product_price;
    this.product_quantity = product_quantity;
    this.display = function () {
        console.log(this.product_name);
    };
}

let s1 = new Student("vikas", "chaudhary", 101, "modinagar");
let s2 = new Student("vikek", "chaudhary", 101, "modinagar");
s1.display();
s2.display();