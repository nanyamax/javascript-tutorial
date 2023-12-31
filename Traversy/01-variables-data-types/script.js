// string properties and methods
// const s = 'hello world';
// x = typeof s;
// x = s.length;
// // access value by key
// x = s[1];

// x = s.__proto__;
// x = s.toLowerCase();

// Challenge 1
// // console.log(x);
// const myString = 'developer';
// let myNewString = myString[0].toUpperCase() + myString.substring(1);

// console.log(myNewString);

// Challenge 2

// Math
// x = Math.round(Math.random() * 100);
// y = Math.round(Math.random() * 50);
// let sumOutput = x + y;
// sumOutput = `${x} + ${y} = ${sumOutput}`;
// console.log(sumOutput);

// let differenceOutput = x - y;
// differenceOutput = `${x} - ${y} = ${differenceOutput}`;
// console.log(differenceOutput);

// let productOutput = x * y;
// productOutput = `${x} * ${y} = ${productOutput}`;
// console.log(productOutput);

// let quotientOutput = x / y;
// quotientOutput = `${x} / ${y} = ${quotientOutput}`;
// console.log(quotientOutput);

// let rmOutput = x % y;
// rmOutput = `${x} % ${y} = ${rmOutput}`;
// console.log(rmOutput);

// Challenge 3
// Arrays
// const arr = [1, 2, 3, 4, 5];
// arr.push(0, 6);
// arr.sort().reverse();

// console.log(arr);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// const arr3 = arr1.concat(arr2.splice(1));
// console.log(arr3);

// Object literals
// A common data structure that holds key/value pairs.

// Challenge 4
// let m;
// const library = [
//   {
//     title: 'obi is a boy',
//     author: 'chukwunonso',
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: 'ada is a girl',
//     author: 'Emmanuel',
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: 'Things fall apart',
//     author: 'chinua Achebe',
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
// ];

// library.map((book) => {
//   book.status.read = true;
// });
// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;
// console.log(library);

// Destructing and renaming
// const { title: firstbook } = library[0];
// console.log(firstbook);

// Convert to JSON String
// const str = JSON.stringify(library);
// console.log(str);

// function
// // Array as Params
// function GetRandom(arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length);

//   const item = arr[randomIndex];

//   console.log(item);
// }

// GetRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// function declaration
// function add(...numbers) {
//   let total = 0;
//   for (const num in numbers) {
//     total += numbers[num];
//   }
//   return total;
// }

// console.log(add(1, 2, 3, 4));

// // function expression
// const subtract = function (a, b) {
//   let total = a - b;
//   return total;
// };
// console.log(subtract(10, 2));

// Arrow function
// const subtract = (a, b) => {
//   let total = a - b;
//   return total;
// };

// console.log(subtract(10, 2));

// implicit return
// const subtract = (a, b) => a - b;

// Can leave off bracket with a single param
// const greet = () => 'hello world';
// console.log(greet());

// Returning an object
// const createObj = () => ({
//   name: 'Brad',
// });

// IIFE Immediately invoked function syntax
// This is used to create a function block where you can define a user that has already been defined before. you can create a function inside this function too. just as the name entails you can invoke or call a function from within this function.
// Recursion is when you call a function from itself

// (function () {
//   const user = 'john';
//   console.log(user);
//   const hello = () => 'Hello from the IIFE';
//   hello();
// })();

// (function (age) {
//   console.log(`I am ${age} years old`);
// })(15);

// Challenge 5
// Function
// const getCelsius = (f) => ((f - 32) * 5) / 9;
// console.log(`The temperature is ${getCelsius(28)}\xb0C `);
// Challenge 6
// const minMax = (arr) => ({
//   min: Math.min(...arr),
//   max: Math.max(...arr),
// });
// console.log(minMax([1, 2, 3, 4, 5, 6]));

//  traversy solution
// when your variable has the same name with your property name you can do it this way
// const minMax = (arr) => {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   return {
//     min,
//     max,
//   };
// };
// console.log(minMax([1, 2, 3, 4, 76, 6]));

// Challenge 7
// IIFE
// (function (L, W) {
//   const area = L * W;
//   const output = `The area of a rectangle with a length of ${L} and a width of ${W} is ${area}`;
//   console.log(output);
// })(10, 5);

// // Execution context
// This is what happens behind the scenes. When you run any JavaScript, a special environment is created to handle the transformation & execution of code. This is called the 'execution context'. it contains the currently running code and everything that aids in its execution.
// There is a global execution context as well as a function execution context for every function invoked.
// JavaScript is a single threaded(process) language and its synchronous.
// memory: this is the variable environment that stores all of your variables and functions as key:value pairs in memory
//Execution code: each line of code is executed line by line

// Execution Context Phases
// Memory Creation Phase:
// 1. Create the global object (browser = window, Nodejs = global)
// 2. Create the 'this' object and bind it to the global obeject
// 3. Setup memory heap for storing variables and function refernces
// 4. Store functions and variables in global execution context and set to "undefined".

// Execution Phase:
// 1. Execute code line by line
// 2. Create a new execution context for each function call

// const x = 100;
// const y = 50;
// const getSum = (n1, n2) => n1 + n2;

// const sum1 = getSum(x, y);
// const sum2 = getSum(10, 5);

// console.log(sum1, sum2);

// The Call Stack
// a stack is data structure in many programming languages (JavaScript included). the call stack could be said to be the manager for our functions or the execution context
// - stack of function to be executed
// - manages execution contexts
// -stacks are LIFO last in first out
// let output;
//   //   let operator = ['+', '-', '*', '/'];
//
// };

// const sumTotal =
// const diffTotal =
// const productTotal =
// const divisionOutput =
//

// Logic & Control Flow
// // If statements

// const calculator = (num1, num2, operator) => {
//   let output;
//   if (operator == '+') {
//     output = num1 + num2;
//   } else if (operator == '-') {
//     output = num1 - num2;
//   } else if (operator == '*') {
//     output = num1 * num2;
//   } else if (operator == '/') {
//     output = num1 / num2;
//   } else {
//     console.log('The is not an operator');
// }
//   switch (true) {
//     case operator == '+':
//       output = num1 + num2;
//       break;
//     case operator == '-':
//       output = num1 - num2;
//       break;
//     case operator == '*':
//       output = num1 * num2;
//       break;
//     case operator == '/':
//       output = num1 / num2;
//       break;
//     default:
//       console.log('This is not an operator');
//   //   }
//   return output;
// };
// console.log(calculator(40, 8, '+'));

// Truthy and Falsy values

// Falsy Values
// - 0
// - '' or ""(empty string)
// -false - null - undefined - NaN;

// Truthy value
// everything else that is not falsy
// - " " or ' '( a string that is not emptyeg 'false', '0')
// - {} (empty object)
// - [] (empty array)
// - true
// - function () {}(empty function)
// use !== undefined or !isNaN() when you you want to equate your variable to 0 to avoid changing to false value in the execution context
// const children = 2;
// if (children !== undefined) {
//   console.log(`you have ${children} children`)
// }else {
//   console.log('please enter number of children')
// }
//  checking for empty arrays(use the length of the array to check for an empty string)
// const posts = [];

// if (posts.length > 0) {
//   console.log('list post');
// } else {
//   console.log('No post list');
// }

// Checking for empty objects( use the object.keys and pass the variable into it to make it an array and then pass the .length method to it)
// const posts = {
//   book: 'podcast',
// };

// if (Object.keys(posts).length > 0) {
//   console.log('list post');
// } else {
//   console.log('No post list');
// }

// loose equality(==) use (===) for strict equality evaluation

// Logical operators
// && - all must be true to be true( will return first falsy value or the last value)
// let a;
// a = 10 && 20;
// a = 10 && 0 && 30;
// a = 10 && 0 && '' && 30;
// console.log(a);
// const posts = [];
// posts.length > 0 && console.log(posts[0]);
// // || - when one is true then it is true(returns the first truthy value or the last value)
// let b;
// b = 10 || 20;
// b = 0 || 20;
// b = 0 || null || '' || undefined;
// console.log(b);
// // ?? returns the right side operand when the left is null or undefined
// let c;
// // c = 10 ?? 20;
// c = 20 ?? null;
// // c = undefined ?? 20;
// // c = 20 ?? '';

// console.log(c);

// Ternary operator
// const age = 2;
//  Using an if statement
// if (age >= 18) {
//   console.log('you can vote');
// } else {
//   console.log('you cannot vote');
// }

// // Using ternary operator
// age >= 18 ? console.log('you can vote') : console.log('you cannot vote');

// Assigning a conditional value to a variable
// const canVote = age >= 18 ? true : false;
// const canVote2 = age >= 18 ? 'vote' : "don't vote";

// console.log(canVote);
// console.log(canVote2);

// Multiple statements
// const auth = false;
// const redirect = auth
//   ? alert('Welcome', '/dashboard')
//   : alert('Access Denied', '/login');

// console.log(redirect);
//

// Only one condition
// auth ? console.log('Welcome') : null;
// auth && console.log('Welcome');
//

// For Loop
// a lood is a control structure that provides a way to do iteration.

// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;
// INITIAL EXPRESSION - intializes a variable /counter.
// CONDITION EXPRESSION - condition that the loop will continue to run as long as it is met or until the condition is false.
// INCREMENT EXPRESSION - expression that will be executed after each iteration of the loop.Usually increments the variable.
// STATEMENT - code that will be executed each time the loop is is run. To execute a `block` of code, use the `{}` syntax
// nested loops
// for (let i = 1; i <= 10; i++) {
//   console.log('number' + i);

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }
// Loop through an array
// const names = ['ify', 'chy', 'sara', 'john'];

// // console.log(names[2]);

// for (let i = 0; i <= names.length; i++) {
//   if (i === 2) {
//     console.log(`${names[i]} is the best `);
//   } else {
//     console.log(names[i]);
//   }
// }
//

// let i = 0;

// while (i <= 10) {
//   console.log('number' + i);
//   i++;
// }

// Nested while loops

// while (i <= 10) {
//   console.log('number' + i);

//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }
// loop over arrays
// const arr = [10, 20, 30, 40];
// while (i <= arr.length) {
//   console.log(arr[i]);
//   i++;
// }
//

// do-while loops will always run at least once even if the condition is false. you use do while when you wantb the block of code to run atleast once even if the condition is never met.
// do{
//   console.log('number' + i);
// } while(i <= 20){}

// Fizzbuzz Challenge

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else {
//     console.log(i);
//   }
// }

// For of Loop
// loop over arrays
// const items = ['book', 'table', 'chair', 'kite'];

// for (const item of items) {
//   console.log(item);
// }

// const users = [{ name: 'brad' }, { name: 'ify' }, { name: 'Amy' }];
// for (const user of users) {
//   console.log(user.name);
// }

// // loop over strings
// const str = 'hello world';

// for (const letter of str) {
//   console.log(letter);
// // }

// // loop over Maps
// const map = new Map();
// map.set('name', 'john');
// map.set('age', 40);
// for (const [key, value] of map) {
//   console.log(key, value);
// }

// FOR IN LOOP
// const colorObj = {
//   color1: 'red',
//   color2: 'blue',
//   color3: 'yello',
// };
// for (const key in colorObj) {
//   console.log(key, colorObj[key]);
// }
// const colorArr = ['red', 'yellow', 'pink'];
// for (const color in colorArr) {
//   console.log(colorArr[color]);
// }

// high level array method( they take in a function as an argument, which this is this called a callback function. in this callback function, we can pass in a variable for each element in that array )
// FOR EACH(ARRAY.FOREACH) - does not return anything , it just loops through the array and does sth specific.

// const socials = ['twitter', 'LinkedIn', 'Facebook'];
// socials.forEach(function (index, item, arr) {
//   console.log(`${index} - ${item}`, arr);
// });
// // socials.forEach((item) => console.log(item));

// const food = ['rice', 'beans', 'yam'];

// // callback function
// function logSocial(social) {
//   console.log(social);
// }

// socials.forEach(logSocial);
// food.forEach(logSocial);
// for array of objects.

// const socialObj = [
//   { name: 'facebook', url: 'http//facebook.com' },
//   { name: 'twitter', url: 'http//twitter.com' },
//   { name: 'instagram', url: 'http//instagram.com' },
//   { name: 'LinkedIn', url: 'http//LinkedIn.com' },
// ];
// socialObj.forEach((key) => console.log(key.name));

// the difference btw forEach and other array methods is that , they return sth. In most cases the return a modified array

// Array.filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14];

// const evenNum = numbers.filter((number) => number % 2 === 0);

// console.log(evenNum);

// using forEach
// let evenNum = [];
// numbers.forEach((number) => {
//   if (number % 2 == 0) {
//     evenNum.push(number);
//   }
// });
// console.log(evenNum);
// const companies = [
//   { name: 'Company one', category: 'Finance', start: 1981, end: 2004 },
//   { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'Company Five', category: 'Technolgy', start: 2009, end: 2014 },
//   { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'Company Eight', category: 'Technolgy', start: 2011, end: 2016 },
//   { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// // const retailComp = companies.filter((key) => {
// //   return key.category === 'Retail';
// // });
// // console.log(retailComp);

// // const retailComp = companies.filter((key) => {
// //   return key.start >= 1980 && key.end <= 2005;
// // });
// // console.log(retailComp);

// const longlastComp = companies.filter((key) => {
//   return key.end - key.start >= 10;
// });
// console.log(longlastComp);

// Array.map
// const numbers = [1, 2, 3, 4, 5];

// const doubleNum = numbers.map((number) => number * 2);
// console.log(doubleNum);

// same with forEach
// const doubleNum = [];
// numbers.forEach((number) => {
//   doubleNum.push(number * 2);
// });
// console.log(doubleNum);

// const nameComp = companies.map((company) => company.name);
// const nameComp = companies.map(
//   (company) => `${company.name}, ${company.category}`
// or
// {return {
//   name: company.name,
//   category: compa.category,
// };
// }
// // );

// // console.log(nameComp);
// const namecomp = companies.map((company) => {
//   return {
//     name: company.name,
//     length: company.end - company.start + 'years',
//   };
// });
// console.log(namecomp);
//
// const squareAndDouble = numbers
//   .map((number) => Math.sqrt(number))
//   .map((sqrt) => sqrt * 2);

// const squareAndDouble2 = numbers.map;
// console.log(squareAndDouble);

// // chaining different methods
// const evenDouble = numbers
//   .filter((number) => number % 2 === 0)
//   .map((number) => number * 2);

// console.log(evenDouble);

// Array.reduce
// accumulator can also be called previous value, current value and inital value.
// const sum = numbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// const sum2 = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum2);
// const cart = [
//   { id: 1, name: 'product 1', price: 130 },
//   { id: 2, name: 'product 2', price: 150 },
//   { id: 3, name: 'product 3', price: 175 },
// ];
// const total = cart.reduce((acc, amount) => acc + amount.price, 0);
// console.log(total);

// Array Method challenge
// const people = [
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@gmail.com',
//     phone: '111-111-111',
//     age: 30,
//   },

//   {
//     firstName: 'Jane',
//     lastName: 'Poe',
//     email: 'jane@gmail.com',
//     phone: '222-222-222',
//     age: 25,
//   },
//   {
//     firstName: 'Bob',
//     lastName: 'Foe',
//     email: 'bob@gmail.com',
//     phone: '333-333-333',
//     age: 45,
//   },
//   {
//     firstName: 'Sara',
//     lastName: 'Soe',
//     email: 'sara@gmail.com',
//     phone: '444-444-444',
//     age: 19,
//   },
//   {
//     firstName: 'Jose',
//     lastName: 'Koe',
//     email: 'jose@gmail.com',
//     phone: '555-555-555',
//     age: 23,
//   },
// ];
// const youngPeople = people
//   .filter((names) => names.age <= 25)
//   .map((names) => {
//     return {
//       name: `${names.firstName} ${names.lastName}`,
//       email: names.email,
//     };
//   });

// console.log(youngPeople);

// challenge 2
// const numbers = [2, -30, 50, 20, -12, -9, 7];
// const positiveSum = numbers
//   .filter((sum) => sum > 0)
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(positiveSum);

// challenge 3
// const words = ['coder', 'programmer', 'developer'];
// const capitalizedWords = words.map(
//   (eachWord) => eachWord[0].toUpperCase() + eachWord.slice(1)
// );
// console.log(capitalizedWords);

// The Document Object Model => this is essentially the interface that allows us to interact with the page element dynamically.
// - Programming interface for web/HTML elements.
// - Structure that we can interact with via JavaScript
// - Includes tags, attributes, text nodes, etc
// - Represented as a tree structure

// A form is always going to be 'get' method unless you specifically set it to 'post'
// the output of document.any method/property is known as html collection
// you can access a document.form with its index but you can't access it with the forEach method
// using a query selector will give what is called a nodelist
// for a HTML collection to be accessed with the forEach method you have to convert it to an Array using the Array.from.
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));
// html collection is array-like but not actually an array
