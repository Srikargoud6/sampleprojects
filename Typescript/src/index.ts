let age: number = 25;
let COURSE_NAME: string = "TypeScript Basics";

let numbers: number[] = [1, 2, 3, 4, 5];
let mixedArray: (number | string)[] = [1, "two", 3, "four", 5];

//tuple: fixed size and type array
let tuple: [number, string] = [1, "one"];
tuple.push("extra"); // This will cause a type error because the tuple is defined to only accept a number and a string

//enum: a way to define a set of named constants
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;

function square(num: number): number {
  return num * num;
}

function product(num1: number, num2 = 5): number {
  return num1 * num2;
}

let employee: {
  readonly id: number;
  name: string;
  address?: string;
} = { id: 321, name: "john" };

// console.log(mySize); // Output: 2

console.log(employee);
