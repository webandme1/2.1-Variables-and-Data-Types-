console.log("Hello world!");

//Variables and Constants
const legalName = "John Doe";
// legalName = "John Smith"; // Error as it's a constant
console.log("legalName", legalName);

let age; // declared but not initialized
console.log("age before assignment", age);
age = 18;
console.log("age after assignment", age);

//Data Types
const num = 1;
console.log("num",typeof num);

const str = "1";
console.log("str",typeof str);

const bool = true;
console.log("bool",typeof bool);

let x;
console.log("x",typeof x);

const y = null;
console.log("y",typeof y);

const arr = ["Apple", "Banana", "Orange"];
console.log("arr",typeof arr);

const obj = {firstName: "John", lastName: "Smith"};
console.log("obj",typeof obj);

//Arithmetic Operator
let firstNum = 17;
let secondNum = 4;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

//Assignment Operator
let grade = 95;
grade = 100;
console.log("Grade:", grade);

let studentName = "Stan";
studentName = "Stanley";
console.log("Name:",studentName);

let newNumber = 5;
newNumber += 6;
console.log(newNumber);

//Comparison Operator
console.log(1 == 1);
console.log(2 > 6);
console.log(1 == "1");
console.log(1 === "1");
console.log(5 != 10);

//Logical Operator
console.log(true && false);
console.log(true && true);
console.log(true || false);
console.log(true || true);
console.log(!true);