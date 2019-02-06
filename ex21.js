const person = (name, age, eyes) => {

    let obj = {
        name: name,
        age: age,
        eyes: eyes,
    }

    obj.talk = (words) => {
        console.log(`I am ${obj.name} and ${words}.`)
    }

    return obj;
}

let eli = person("Eli", 15, "brown");
let tim = person("Tim", 13, "brown")
let cora = person("Cora", 12, "blue");

eli.talk("I like board games")
tim.talk("Programming is better")
cora.talk("Gymnasties are not as good as either")