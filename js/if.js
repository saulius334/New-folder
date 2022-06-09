
// if () {}
// if () {} else 
// if () {} else if () {}
// if () {} else if () {} else if () {} else if () {} else if () {} else if () {}
// if () {} else if () {} else if () {} else if () {} else if () {} else if () {} else () {}




const a = 7;
const b = 5;

console.log();

if (a > b) {
    console.log('Pirmas yra daugiau uz 5');
} else {
    console.log('Pirmas nera daugiau uz 5');
}


const temp = 15;

if(temp > 12) {
    console.log('siandien silta');
} else {
    console.log('siandien saaaalta');
}

const diena = 2;

if (diena === 1) {
  console.log('pirmadienis');
} else {
  if (diena === 2) {
    console.log(`antradienis`);
  } else {
    console.log(`gera diena`);
  }
}

const day = 4;
if (day ===1) {
    console.log(`siandien yra pirmadienis`);
} else if (day === 2) {
    console.log(`antradienis`);
} else if (day === 3) {
    console.log(`treciadienis`);
} else if (day === 4) {
    console.log(`ketvirtad`);
}
console.log(`----------------------------------------`);

const temper = 72;
const lietus = false;
const nuokadasilta = 12;

if (lietus === true) { 
    if (temper > nuokadasilta) {
        console.log(`1) varom nuogi`);
    } else {
        console.log(`1) pasimk palta ir sketi`);
    }
} else {
    if (temper > nuokadasilta) {
        console.log(`1) gali eit nuogas nes silta`);
    } else {
    console.log(`1)pasiimk striuke`);
    }
}
console.log(`-----------------------------------------------`);
// && (and)
// || (or)

if (lietus === true && temper >= nuokadasilta) {
    console.log(`2) varom nuogi`);
} else if (lietus === true && temper < nuokadasilta) {
    console.log(`2) pasimk palta ir sketi`);
} else if (lietus === false && temper >= nuokadasilta) {
    console.log(`2) gali eit nuogas nes silta`);
} else if (lietus === false && temper < nuokadasilta) {
    console.log(`2)pasiimk striuke`);
} 