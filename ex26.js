let pets = [
    {name: "Sailor", type: "Dog", age: 4},
    {name: "Fluffy", type: "Gerbil", age: 7},
    {name: "Sally", type: "Tortise", age: 27},
    {name: "Red", type: "Fox", age: 11}
]

let ages = pets.map(pet => pet.age);
let toatal_age = ages.reduce((acc, i) => acc += i);
let fluffy = pets.find(pet => pet.name == "Fluffy");
let old_animals = pets.filter(pet => pet.age > 10);
let young_animals = pets.filter(pet => pet.age <= 10);

console.log("Animal ages:", ages);
console.log("Total_age:", toatal_age);
console.log("fluffy:", fluffy.age, "\n");
console.log("Old Animals:\n");

old_animals.forEach(pet => console.log(`The animal ${pet.type} is ${pet.age} years old and is named ${pet.name}.\n`));
console.log("Young Animals:\n");
young_animals.forEach(pet => console.log(`The animal ${pet.type} is ${pet.age} years old and is named ${pet.name}.\n`));