// for loops
// for (let i = 0; i < 5; i++) {
//   console.log("in loop", i);
// }
// // console.log('loop finshed');

// const names = ["shaun", "ify", "glory"];
// for (let i = 0; i < names.length; i++) {
//   //   console.log(names[i]);

//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// while loop

// let i = 0;
// while (i < 5) {
//   console.log("in loop", i);
//   i++;
// }

// const names = ["shaun", "ify", "glory"];

// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// do while loop
// let i = 5;

// do {
//   console.log("take high", i);
//   i++;
// } while (i < 5);

// if,else if, else statement
// const password = "passlove";

// if (password.length >= 12) {
//   console.log("strong password");
// } else if (password.length >= 8) {
//   console.log("good password");
// } else {
//   console.log("incomplete/bad password");
// }

// function declaration
// function greet() {
//   console.log("hello ify");
// }

// function expression
// const speak = function () {
//   console.log("good evening ify");
// };
// hoisting is when js executes a line of code that is called before the function is declared. this happens only on function declaration.
// in function expression, the function must be declared before calling it and this is  a good practice.
// greet();
// speak();

// arguments and parameters
// const speak = function (name, time) {
//   console.log(`good ${time} ${name}`);
// };

// speak("ify", "morning");
// const greet = () => "hello, world";
// const result = greet();
// console.log(result);

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// functions can also be methods but the difference is in how the are called. methods are called with a dot after the object to work on

// objects
// primitive values -: null, boolean , strings, symbol, undefined. this values are stored on the stack.
let userOne = 100;
let userTwo = userOne;

console.log(`${userOne} ${userTwo}`);

userOne = 50;
console.log(`${userOne} ${userTwo}`);

// while reference values are stored on the heap eg. objects, arrays and any other type of object.
let callerOne = {
  name: "shaun",
  age: 18,
};
let callerTwo = callerOne;
console.log(`${callerOne[1]} ${callerTwo[1]}`);



// interacting with a browser
- document Object Model(DOM)
- Add, change and delete content 
- Make a cool pop-up effect in the web page