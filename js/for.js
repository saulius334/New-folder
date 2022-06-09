//ciklai
/* 
for
for-of
for-in
foreach
while
do-while
map
filter
reduce
sort
*/


// template
// for() {}
/*
const kupiuros = [20, 50, 10, 5, 200]

let pinigine = 0;
let index = 0;

pinigine += kupiuros[index];
index += 1;
console.log(pinigine);

pinigine += kupiuros[index];
index += 1;
console.log(pinigine);

pinigine += kupiuros[index];
index += 1;
console.log(pinigine);

pinigine += kupiuros[index];
index += 1;
console.log(pinigine);

pinigine += kupiuros[index];
index += 1;
console.log(pinigine);

*/


const kupiuros = [20, 50,20, 50,20, 50,20, 50,20, 50,20, 50,20, 50] //rasyk kiek nori

let pinigine = 0;
console.log(`start`);

for (let i=0; i< kupiuros.length; i++) {
    const kupiura = kupiuros[i];
    pinigine += kupiura;
console.log(i, `)`, kupiura, `->`, pinigine);
}


console.log(`end`);
