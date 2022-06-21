
//skaiciuje esanciu skaitmenu kiekis
// @param {*} n Skaicius
// @returns {number} Skaitemnu kiekis
// function numCount(n) {
//     if (n > 0) {
// return (`` + n).length;
// } else {
//     return (`` + n * -1).length;
// }




const numAsString = `` + n;
let size = numAsString.length;


//eliminuojame minusea
if (n < 0) {
    size--
}

// eliminate kablelis
if (n % 1 !== 0) {
    size--
}

return size
}


console.log(numCount(1), `->`, 1);
console.log(numCount(5), `->`, 1);
console.log(numCount(69), `->`, 2);
console.log(numCount(11111111), `->`, 8);

console.log(numCount(-1), `->`, 1);
console.log(numCount(-5), `->`, 1);
console.log(numCount(-69), `->`, 2);
console.log(numCount(-11111111), `->`, 8);

console.log(numCount(-1.12), `->`, 3);
console.log(numCount(-5.41), `->`, 3);
console.log(numCount(-69.41), `->`, 4);
console.log(numCount(-11111111.41), `->`, 10);


console.log(numCount(`labas`));
console.log(numCount(`labas`));
console.log(numCount(`labas`));
console.log(numCount(`labas`));
console.log(numCount(`labas`));
console.log(numCount(`labas`));
console.log(numCount(`labas`));