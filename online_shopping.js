let onlineShopping = new Object();

function Student(product_id, product_name, product_price, product_quantity) {
    this.product_id = product_id;
    this.product_name = product_name;
    this.product_price = product_price;
    this.product_quantity = product_quantity;
    this.display = function () {
        console.log(this.product_price);
        console.log(this.product_quantity);

    };
}

let s1 = new Student(101,"apple", 100, 10);
let s2 = new Student(102,"banana", 50, 20);
s1.display();
s2.display();