const printPerson = (name, age) => {
    console.log(`Hi ${name}, you are ${age} years old.`);
}

printPerson('Tim', 13);
printPerson('Eli', 15);
printPerson('Cora', 12);
printPerson('Calvin', 35);

console.log('----------------- pets ---------------');

const printPet = (owner_name, owner_age, pet_name, pet_age) => {
    printPerson(owner_name, owner_age);
    console.log(`That person owns ${pet_name} who is ${pet_age} years old.`);
}

printPet('Tim', 13, 'Sailor', 6);
printPet('James', 8, 'Harvey', 19);
printPet('Eric', 47, 'Smelly pete', 4);
printPet('Shawna', 29, 'Pelly Parrot', 20);

console.log('---------------- callback style ---------------');

const fancyPet = (owner_name, owner_age, pet_name, pet_age, cb) => {
    cb(owner_name, owner_age);
    console.log(`That person owns ${pet_name} who is ${pet_age} years old.`);
}

fancyPet('Tim', 13, 'Sailor', 6, (name, age) => {console.log(`Oooh fancy ${name} is ${age} years old.`)});
