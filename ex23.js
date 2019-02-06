class Guitar {
  constructor (color, name, wood) {
    this.color = color;
    this.name = name;
    this.wood = wood;
  }
  
  play(note) {
    console.log(`${this.name}:${this.color}:${this.wood} plays ${note}`);
  }
}

class Jazzmaster extends Guitar {
  constructor (color, name, wood) {
    super(color, name, wood);
    this.volume = 0;
    this.tone = 0;
  }

  volume(level) {
    this.volume = level;
  }

  tone(level) {
    this.tone = level;
  }
}

class BassVI extends Jazzmaster {
  play(note) {
    console.log(`${note}`);
  }
}

class Person {
  constructor (name, age, eyes) {
    this.name = name;
    this.age = age;
    this.eyes = eyes
  }

  talk(words) {
    console.log(`I am ${this.name} and ${words}.`);
  }
}

class Musician extends Person {
  play(instrument, sheet_music) {
    for(let note of sheet_music) {
    instrument.play(note);
    }
  }
}

const intro = (musician, instrument, type) => {
        console.log(`Introducing ${musician.name} at age ${musician.age} with ${musician.eyes} color eyes, playing the ${instrument.color} ${type} made by ${instrument.wood} wood and named ${instrument.name}`)
    }

let stringy = new BassVI("pink", "stringy", "oak")
let clonky = new Jazzmaster("red", "clonky", "pine")
let normal = new Guitar("black", "normal", "redwood")
let bobby = new Musician("bobby", 22, "brown")
let jason = new Musician("jason", 35, "pale blue")
let kara = new Musician("kara", 19, "hazel")

intro(bobby, stringy, "BassVI")
bobby.play(stringy, ["D", "A", "F", "F#", "G", "Bb"])
console.log("and now...")
intro(jason, clonky, "Jazzmaster")
bobby.play(clonky, ["C", "E", "F#", "E", "G"])
console.log("and now...")
intro(kara, normal, "Guitar")
kara.play(normal, ["G", "A", "Bb", "E", "A", "G#", "C"])
