let name = "Tim C. Wilson";
let age = 13;
let hieght = 68;

let feet = Math.floor(hieght / 12);
let inches = hieght - (feet * 12);

console.log(`I am ${feet} feet ${inches}`);
console.log("my name is", name);
console.log(`I am ${age} years old`);

console.log("Age * Height:", age * hieght);
console.log("Age * Feet:", age * feet);