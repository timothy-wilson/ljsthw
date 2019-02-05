const person = (name, age, eyes) => {

    let obj = {
        name: name,
        age: age,
        eyes: eyes,
        talk: (words) => {
            console.log(`I am ${obj.name} and ${words}.`)
        }
    }
    return obj;
}

let alex = person("Alex", 16, "green");
let frank = person("Frank", 34, "blue");

alex.talk("this is alex")
frank.talk("it works for frank too")