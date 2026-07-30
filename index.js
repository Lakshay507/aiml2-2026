const app = require("./app.js");

function calculatePercentage(value, total) {
    return (value / total) * 100;
}

function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
}

function countNumbers(limit) {
    let i = 1;
    while (i <= limit) {
        console.log(i);
        i++;
    }   
}

function createHtmlList(items, type = "ul") {
    let html = "";
    let i = 0;
    const tag = type === "ol" ? "ol" : "ul";

    html += `<${tag}>`;

    while (i < items.length) {
        html += `<li>${items[i]}</li>`;
        i++;
    }

    html += `</${tag}>`;
    return html;
}

function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function countWithDoWhile(limit) {
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= limit);
}

function separate() {
    return "<hr>";
}

console.log("Percentage:", calculatePercentage(25, 200) + "%");
console.log(greetUser("Ali"));
console.log(separate());

console.log("While loop output:");
countNumbers(5);
console.log(separate());

console.log("Do-while loop output:");
countWithDoWhile(3);
console.log(separate());

console.log("Full name:", printFullName("John", "Doe"));
console.log(separate());

console.log("Unordered list:");
console.log(createHtmlList(["Apple", "Banana", "Cherry"]));
console.log(separate());

console.log("Ordered list:");
console.log(createHtmlList(["One", "Two", "Three"], "ol"));
console.log(separate());

console.log(app.xx);
console.log(app.yy);