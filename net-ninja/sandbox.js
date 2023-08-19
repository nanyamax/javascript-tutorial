// strings
console.log("hello, world");

//string concatenation
let day = 22;
var month = "july";
let year = 2023;

let date = day + " " + month + " " + year;
console.log(date);

// getting charaters
console.log(date[6]);

//string length
console.log(date.length);

// string method
let email = "sundayifunanya@yahoo.com";
//let result = email.lastIndexOf();

let radius = 10;
const pi = 3.14;

console.log(radius / 2);
//let result = radius % 3;
//let result = 5 * (10 - 3) ** 2;
//console.log(result);

//template strings or template literal(the job of template literals is to allow us inject variables directly into the string without having to come out of it or cconcatenating with + signs. it is created using back ticks ``  )
const title = "best reads of 2019";
const author = "Mario";
const likes = 30;
//let result = `The blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);
//comparing two things using ==(double equals sign) shows what is know as abstract equality or loosed equality which means that values type is not considered for comparison.eg
//let age = 25;

//console.log(age == 25);
//console.log(age == "25");

// strict comparison( different types cannot be equal)

let age = 25;

console.log(age === 25);
console.log(age === "25");
