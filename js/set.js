const a = [1, 2, 3, 4, 1, 2, 5, 4, 6, 7, 7, 7, 7, 2]

//kartojasi reikia surast unikalius

// 1 budas 
const b = []
const b2 = []
for (const n of a) {                       //
    if (!b.includes(n)) {              // jeigu B savyje neturi n (sauktukas padaro jeigu neturi)
        b.push(n)                       //ipushinam n verte
    } else {
        b2.push(n)
    }
    console.log(n, `->`, b); // unikalus numeriai
}
console.log(b2); // kas liko - pasikartojantys


// 2 budas

const c1 = {};
const c2 = [];

    for (const n of a) {
        if (!(n in c1)) {                    // klausia ar yra n ? c1 viduje objekte ?  sauktukas invertina ir klausia ar n nera c1 viduj ?
            c1[n] = 1
        }
    }
    console.log(c1);

    for (const key in c1) {
        c2.push(+key);
    }
    console.log(c2);

    // 3 budas
console.log(`-------------------`);

    const d1 = {};
    
    
    for (const n of a) {
        if (!(n in d1)) {
            d1[n] = 1
        }
    }
    console.log(d1);
    
    
    
    const d2 = Object.keys(d1); // veitoj for ciklo, istraukia visus kays i array if objekto
    console.log(d2);

    // pavyzdys kaip istraukia Object.keys is person visa info
    const person = {
        name: `petras`,
        age: 99,
        isMarried: true,
    }
    console.log(Object.keys(person));

console.log(`-----------------------------`);
    //4 budas SET 
// paduoda iskart unikalias reiksmes


const x = [5, 1, 2, 3, 3, 3, 3, `labas`, 7, 7, 1, 6, 8,]
    const rinkinys = new Set();
    for (const n of x) {
        rinkinys.add(n)
    }
console.log(rinkinys);