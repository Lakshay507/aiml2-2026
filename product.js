



// Create a class Product with productId, productName, and price.
//  Add an instance method getDiscountedPrice(discount) to calculate the final price.
//   Create a static method compareProducts(p1, p2) that accepts two Product objects
//    and displays the product having the higher price.
//  Create a derived class Electronics having an additional property warranty. 
//  Override a suitable display method so that electronics-specific information is also displayed.
//   Concepts Covered: Objects as Arguments, Static Method, Instance Method, Inheritance, Overriding
class Product {
    constructor(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }

    getDiscountedPrice(discount) {
        return this.price - (this.price * discount / 100);
    }

    display() {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
    }

    static compareProducts(p1, p2) {
        if (p1.price > p2.price) {
            console.log("Higher priced product:", p1.productName);
        } else if (p2.price > p1.price) {
            console.log("Higher priced product:", p2.productName);
        } else {
            console.log("Both products have the same price");
        }
    }
}

class Electronics extends Product {
    constructor(productId, productName, price, warranty) {
        super(productId, productName, price);
        this.warranty = warranty;
    }

    display() {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
        console.log("Warranty:", this.warranty, "years");
    }
}

let p1 = new Product(101, "Shoes", 2000);
let p2 = new Product(102, "Watch", 3000);
p1.display();
p2.display();
let e1 = new Electronics(103, "Laptop", 50000, 2);

console.log("Discounted Price:", p1.getDiscountedPrice(10));

Product.compareProducts(p1, p2);

console.log("\nElectronics Details:");
e1.display();
