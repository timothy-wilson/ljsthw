const readline = require('readline-sync');

let def = Math.floor(Math.random() * 5 + 5)

class Game {
    constructor() {
        this.hp = def
    }

    say(prompt) {
        console.log(prompt);
    }

    die(message) {
        this.say(message);
        process.exit(1);
    }

    ask(promt) {
        this.say(`[[You have ${this.hp} hit points.]]`);
        if(this.hp <= 0) {
            this.die("You died!");
        } else {
            return readline.question(promt + "  ");
        }
    }

    addRoom(room) {
        this[room.name] = room;
        room.Game = this;
    }

    play(name) {
        this[name].enter();
    }

    hit(amount) {
        this.hp -= amount;
    }

    check() {
        if(this.hp <= 0) {
            this.die("You died")
        }
    }
}

class Room {
    constructor(name) {
        this.name = name;
    }

    enter() {
        console.log("Implement me!")
    }
}

class Well extends Room {
    enter() {
        this.Game.say("You are walking through the woods and see a well.");
        this.Game.say("Walking up to the well and looking down you see a shiny thing at the bottom");
        let next = this.Game.ask("Do you jump or climb?");

        if(next === "climb") {
            this.Game.play("rope");
        } else if(next === "jump") {
            this.Game.play("jump");
        } else {
            this.Game.say("You cant do that here.");
            this.Game.play("well");
        }
    } 
}

class Rope extends Room {
    enter() {
        let chance = Math.random()
        if (chance < 0.75) {
            this.Game.say("You made it to the bottom of the rope.");
            this.Game.say("You see to your left a dark tunnel and to the right a locked door.");
            let next = this.Game.ask("Do you go left or right?");

            if (next === "left") {
                this.Game.say("You walk slowly into the tunnel, it is very dark.");
                this.Game.play("spidercave");
            } else if (next === "right") {
                this.Game.play("door");
            }
        } else {
            this.Game.say(`The rope snaps and now you have ${this.Game.hp - 3} health-points`)
            this.Game.hit(3);
            this.Game.check();
            this.Game.say("You walk into a dark and damp tunnel.")
            this.Game.play("spidercave")
        }
    }
}

class Jump extends Room {
    enter() {
        this.Game.say("Yikes let's see if you can make it!");
        this.Game.say(`you made it but have ${Math.floor(this.Game.hp/2)} health-points.`);
        this.Game.hit(Math.floor(this.Game.hp/2));
        this.Game.say("you walk forward into a narrow passage and come to a fork.");
        let next = this.Game.ask("Do you go left or right?");

        if(next === "left") {
            this.Game.say("you turn to the left and find yourself in a black smelly tunnel.");
            this.Game.play("spidercave")
        } else if (next === "right") {
            this.Game.say("You turn to the right and find yourself walking down a narrow staircase.");
            this.Game.play("door");
        }
    }
}

class SpiderCave extends Room {
    enter() {
        this.Game.say("You think you see a humoungus man-eating spider right in front of you.");
        this.Game.say(`Ouch! The Man-eating spider just bit you and now you have ${this.Game.hp - 2} health-points`)
        this.Game.hit(2)
        this.Game.check()
        let swing = this.Game.ask("Do you swing your sword to the left, to the right, or strait ahead of you?");

        let x = Math.random();
        let direction;
        if (x < 0.3) {
            direction = "left";
        } else if (x < 0.6) {
            direction = "right";
        } else {
            direction = "ahead";
        }

        if (swing === direction) {
            this.Game.say("You killed the spider and run out of the tunnel.");
            this.Game.play("door");
        } else {
            this.Game.say("You missed");
            this.Game.play("spidercave");
        }
    }
}

class Door extends Room {
    enter() {
        this.Game.say("There is a strange lock on the door you need to fill in the blanks in the pattern");
        let answer = this.Game.ask("Fill the blanks: 1 1 2 _ 5 8 13 _ 34 55 _");
        if (answer === "3 21 89") {
            this.Game.play("gold");
        } else {
            this.Game.hit(1)
            this.Game.say(`That was the wrong awnser you now have ${this.Game.hp} health-points.`);
            this.Game.play("door")
        }
    }
}

class Gold extends Room {
    enter() {
        this.Game.say("You found the gold and are really rich.")
    }
}

let game = new Game();
game.addRoom(new Well("well"));
game.addRoom(new Rope("rope"))
game.addRoom(new Jump("jump"))
game.addRoom(new SpiderCave("spidercave"))
game.addRoom(new Door("door"))
game.addRoom(new Gold("gold"))
game.play("well")