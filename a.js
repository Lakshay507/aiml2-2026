var c="something";
console.log(c);



let a=40;
let b=50;
if(a>b){
    console.log("a is greater than b");
}
else{
    console.log("b is greater than a");
}


function abes(){
    console.log("welcome students");
    console.log("welcome to the class");
}
abes();


function add(x,y){
    return x+y;
}
console.log(add(10,20));

let result=add(10,20);
console.log("sum =",result);

function fullName(firstName="ABES",lastName="kumar"){
    return firstName+" "+lastName;
}
let d=fullName();
console.log(d);
console.log("by default value of firstName and lastName =",fullName());


let e=fullName("mayank", "sharma");
console.log("with provided values =",e);


function percentage(a,b,c){
    return (a+b+c)/3;
}
 let f= percentage(10,2,5);
 console.log(f);


let i=0;
while(i<10){
    console.log(i);
    i++;
}
let j=0;
console.log("do while loop");

do{
    console.log(j);
    j++;
} while(j<10);


let sum=0;
for(let i=0;i<10;i++){
    sum+=i;
}
console.log("sum =",sum);

console.log("for of loop");

let arr=[10,20,30,40,50];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}   
console.log("array traversal using for of loop , using i variable");
for(let value of arr){
    console.log(value);
}
console.log("array traversal using for of loop , using value variable");

console.log("mixed array");
let mixedarr=[10,"hello",true,3.14];
for(let i=0;i<mixedarr.length;i++){
    console.log(mixedarr[i]);
}

console.log("2d array");
let arr2d=[[10,20,30],[40,50,60],[70,80,90]];
for(let i=0;i<arr2d.length;i++){
    for(let j=0;j<arr2d[i].length;j++){
        console.log(arr2d[i][j]);
    }}


const marks={
    mayank:90,
    abes:80,
    sharma:70
};
console.log(marks);

for (let key in marks){
    console.log(key,marks[key]);
}