// [0, 1]

// const n1 = Math.random();
// console.log(n1);

function randomBetween(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1))
}

// for (let i = 0; i<= 20; i++){
// console.log(randomBetween(1, 20));
// }







const stats = {}


for (let i = 0; i<= 100000000; i++){
    const n = randomBetween(1, 2);
    if (n in stats) {
        stats[n]++;
    } else {
        stats[n] = 1
    }
}
console.log(stats);