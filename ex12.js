const fs = require('fs');

const print_lines = (err, data) => {
    console.log(data.toString());
}

const yell_at_me = (what) => {
    return what.toUpperCase();
}

fs.readFile("hello.txt", print_lines);

fs.readFile("hello.txt", (err, data) => {
    let yelling = yell_at_me(data.toString());
    print_lines(err, yelling);
});
