const readline = require("readline-sync");

const say = (prompt) => {
    console.log(prompt)
}
 
const die = (message) => {
    say(message);
    process.exit(1);
}

const ask = (hp, prompt) => {
    console.log(`[[You have ${hp} hit points.]]`);
    if(hp <= 0) {
        die("You Died");
    } else {
        return readline.question(prompt + "  ");
    }
}

const well = (hp) => {
    say("You are walking through the woods and see a well.")
    say("Walking up to it and looking down you see a shiny thing at the bottom")
    let next = ask(hp, "what do you do?");

    if(next === "climb") {
        rope(hp);
    } else if(next === "jump") {
        say("Yikes! lets see if you can make it")
        say(`you made it but lost ${Math.floor(hp/2)} health-points`)
        hp = Math.floor(hp / 2);
        rope(hp);
    } else {
        say("You can't do that here.")
        well(hp);
    }
}

const rope = (hp) => {
    if (hp === def) {
        chance = Math.random()
        if (chance < 0.7) {
            say("You made it to the bottom of the rope")
            say("You see to your left a dark tunnel and to your right you see a locked door")
            let next = ask(hp, "What do you do?")
            if (next === "left") {
                spider(hp)
            } else if (next === "right") {
                door(hp)
            } else {
                say("You can't do that here.")
                well(def)
            }
        } else {
            say("The rope snaps and you lose 3 health points");
            hp -= 3;
            if (hp < 0) {
                die("You Died");
            }
            say("But you find a secret passage and you walk into it");
            say("You come to a fork there are two stair cases one on your right and one on your left");
            let next = ask(hp, "What do you do?");
            if (next === "left") {
                spider(hp);
            } else if (next ==='right') {
                door(hp);
            }
        }
    } else {
        spider(hp);
    }
}


const door = (hp) => {
    say("There is a strange lock on the door you need to fill in the blanks in the pattern");
    let answer = ask(hp, "Fill the blanks: 1 1 2 _ 5 8 13 _ 34 55 _");
    if (answer === "3 21 89") {
        gold(hp);
    }
}

const spider = (hp) => {
    say("It's dark and you walk right into a huge spider web");
    say("You think you see a humungous spider coming towards you");
    hp -= 2;
    say("Ouch you feel the spider bit you and take you down 2 health points");
    say("You take out your sword to try to kill the spider");
    while (hp > 0) {
    let swing = ask(hp, "do you swing your sword to the left or the right or right ahead of you");
    let position = Math.random()
    if (position < 0.33) {
        position = "left"
    } else if (position < 0.66) {
        position = "right"
    } else {
        position = "ahead"
    }
    if (swing === position) {
        say("You killed the spider, you run away and come to a locked door");
        door()
    } else if (swing !== position) {
        say("You missed the spider, Ouch it just bit you agian and you lost 2 health points");
        hp -= 2
        say(position)
    }
    die("You Died")
    }
}

const gold = (hp) => {
    say("You won you found the gold");
}

let def = 10

well(def)