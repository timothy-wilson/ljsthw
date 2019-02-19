const build_add = (a) => (b) => a + b;

let add5 = build_add(5);
let add3 = build_add(3);

console.log(`3+8=${add3(8)}`);
console.log(`5+13=${add5(13)}`);
console.log(`5+3+1=${add5(add3(1))}`);