class person {
    constructor(name, age, eyes) {
        this.name = name;
        this.age = age;
        this.eyes;
    }

    talk(words) {
        console.log(`I am ${this.name} and ${words}.`)
    }
}

let eli = new person("Eli", 15, "brown");
let tim = new person("Tim", 13, "brown")
let cora = new person("Cora", 12, "blue");

eli.talk("I like board games")
tim.talk("Programming is better")
cora.talk("Gymnasties are not as good as either")