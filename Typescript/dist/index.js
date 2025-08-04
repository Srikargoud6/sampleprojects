"use strict";
let age = 25;
let COURSE_NAME = "TypeScript Basics";
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "two", 3, "four", 5];
//tuple: fixed size and type array
let tuple = [1, "one"];
tuple.push("extra"); // This will cause a type error because the tuple is defined to only accept a number and a string
//enum: a way to define a set of named constants
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
function square(num) {
    return num * num;
}
function product(num1, num2 = 5) {
    return num1 * num2;
}
let employee = { id: 321, name: "john" };
// console.log(mySize); // Output: 2
console.log(employee);
