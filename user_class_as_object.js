// User-defined Product object
let product = {
    productId: 101,
    productName: "Laptop",
    price: 50000,
    quantity: 2,

    calculateTotalPrice: function() {
        return this.price * this.quantity;
    },

    updateQuantity: function(newQuantity) {
        this.quantity = newQuantity;
    },

    displayProduct: function() {
        console.log("Product ID: " + this.productId);
        console.log("Product Name: " + this.productName);
        console.log("Price: ₹" + this.price);
        console.log("Quantity: " + this.quantity);
        console.log("Total Price: ₹" + this.calculateTotalPrice());
    }
};

product.displayProduct();

product.updateQuantity(5);

console.log("\nAfter updating quantity:");
product.displayProduct();