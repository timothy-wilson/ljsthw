const readline = require('readline-sync');

let name = readline.question("what is your name?\n>");
let age = readline.question("What is your age? \n>");
let hair = readline.question("What is your hair color?\n>");

console.log(`your name is ${name}`);
console.log(`your age is ${age}`);
console.log(`your hair color is ${hair}`);