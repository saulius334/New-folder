console.log(`-------Kintamųjų inicijavimas-----------------`);
//1
let pirmas = 1;
console.log(pirmas);
let antras = 2;
console.log(antras);
let trecias = 3;
console.log(trecias);

//2
let a =`vienas`;
console.log(a);
let b = `du`;
console.log(b);
let c = `trys`;
console.log(c);

//3
let ketvirtas = [1, 2, 3, 4, 5];
console.log(ketvirtas);
let penktas = [6, 7, 8, 9, 10, 11];
console.log(penktas);
let sestas = [12, 13, 14, 15, 16];
console.log(sestas);

//4
let d = [`laba`, `diena`, `as`, `esu`, `saulius`];
console.log(d);
let e = [`viens`, `du`, `trys`, `as`, `esu`];
console.log(e);
let f = [`keturi`, `penki`, `sesi`, `man`, `yra`];
console.log(f);

console.log(`--------------Veiksmai su kintamaisiais-----------------------`);
//1
const sumele = sestas[0] + sestas[1] + sestas[2] + sestas[3] + sestas[4];
console.log(sumele);

//2
const zodeliai = `${d[0]} ${d[1]} ${d[2]} ${d[3]} ${d[4]}`;
console.log(zodeliai);

//3
const ketvirtasvalue = ketvirtas[0] - ketvirtas[1] + ketvirtas[2] - ketvirtas[3] + ketvirtas[4];
console.log(ketvirtasvalue);

//4
const zodeliaikiti = `${e[0]} ${e[1]} ${e[2]} ${e[3]} ${e[4]}`; //copy-paste nuo const = zodeliai;
const zodeliaidarkiti = `${f[0]} ${f[1]} ${f[2]} ${f[3]} ${f[4]}`;
const sarasas = `${zodeliai}, ${zodeliaikiti}, ${zodeliaidarkiti}`;
console.log(sarasas);

console.log(`---------Kintamųjų palyginimas----------------------------`);
//1
if ( pirmas > antras) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( pirmas < antras) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( pirmas === antras) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( pirmas !== antras) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( pirmas >= antras) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}
if ( pirmas <= antras) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

//2
const ailgis = a.length;
const bilgis = b.length;
const cilgis = c.length;
console.log(ailgis, bilgis, cilgis);

//3 
if ( ailgis < bilgis) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( ailgis > bilgis) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( ailgis === bilgis) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( ailgis !== bilgis) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( ailgis <= bilgis) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( ailgis >= bilgis) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

//4
const dilgis = d[0].length + d[1].length + d[2].length + d[3].length + d[4].length;
const eilgis = e[0].length + e[1].length + e[2].length + e[3].length + e[4].length;
const filgis = f[0].length + f[1].length + f[2].length + f[3].length + f[4].length;
console.log(dilgis, eilgis, filgis);
//5
if ( dilgis > eilgis) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( dilgis < eilgis) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( dilgis === eilgis) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( dilgis !== eilgis) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( dilgis >= eilgis) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

if ( dilgis <= eilgis) {
  console.log(`Pomidoras`);
} else {
  console.log(`Bandykite kita karta`);
}

console.log(`---------Ciklo for panaudojimas----------------------------`);
//1
let zero = 0;
for (i = 0; i <= 0; i++) {
  zero += i;
}
console.log(zero);

let four = 0;
for (i = 0; i <= 4; i++) {
  four += i;
}
console.log(four);

let hundred = 0;
for (i = 0; i <= 100; i++) {
  hundred += i;
}
console.log(hundred);

let fivesevenfour = 574;
for (i = 0; i <= 815; i++) {
  fivesevenfour += i;
}
console.log(fivesevenfour);

let minusfifty = -50;
for (i = 0; i <= 50; i++) {
  minusfifty += i;
}
console.log(minusfifty);

let minusseventy = -70;
for (i = 0; i <= 30; i++) {
  minusseventy += i;
}
console.log(minusseventy);

//2

let zodis = [a, b, c];
let backwards = '';
console.log(zodis);
for (i = zodis.length - 1; i >= 0 ; i--) {
  backwards += zodis[i];
}
console.log(backwards);

//3
let pirmasliekana = -1;
for (i = 0; i <= 11; i++) {
  if (i % 3 === 0) {
    pirmasliekana += 1;
  }
}

let antrasliekana = -1;
for (i = 0; i <= 11; i++) {
  if (i % 5 === 0) {
    antrasliekana += 1;
  }
}
let treciasliekana = -1;
for (i = 0; i <= 11; i++) {
  if (i % 7 === 0) {
    treciasliekana += 1;
  }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ${pirmasliekana} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ${antrasliekana} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ${treciasliekana} vienetai.`);
console.log(`----`);
let ketvirtasliekana = 0;
for (i = 8; i <= 31; i++) {
  if (i % 3 === 0) {
    ketvirtasliekana += 1;
  }
}
let penktasliekana = 0;
for (i = 8; i <= 31; i++) {
  if (i % 5 === 0) {
    penktasliekana += 1;
  }
}
let sestasliekana = 0;
for (i = 8; i <= 31; i++) {
  if (i % 7 === 0) {
    sestasliekana += 1;
  }
}

console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 3 yra ${ketvirtasliekana} vienetai.`);
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 5 yra ${penktasliekana} vienetai.`);
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 7 yra ${sestasliekana} vienetai.`);
console.log(`----`);

let septintasliekana = -1;
for (i = -18; i <= 18; i++) {
  if (i % 3 === 0) {
    septintasliekana += 1;
  }
}
let astuntasliekana = -1;
for (i = -18; i <= 18; i++) {
  if (i % 5 === 0) {
    astuntasliekana += 1;
  }
}
let devintasliekana = -1;
for (i = -18; i <= 18; i++) {
  if (i % 7 === 0) {
    devintasliekana += 1;
  }
}
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 3 yra ${septintasliekana} vienetai.`);
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 5 yra ${astuntasliekana} vienetai.`);
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 7 yra ${devintasliekana} vienetai.`);
console.log(`------------Funkcijos--------------------`);

//1
function tusciaFunkcija () {
  return false;
}
console.log(tusciaFunkcija());

//2
function daugyba(a, b) {
  daug = a * b;
  return daug;
}
console.log( daugyba(pirmas, antras));
console.log( daugyba(antras, trecias));
console.log( daugyba(pirmas, trecias));

//3

let ilgis = 0;
const simts = 100;
const stuke = 1000;
const belekiek = 12412494809129038;
const asd = `asd`;
const bl = true;
const qwert = NaN;

function skaitmenuKiekisSkaiciuje(a) {
  if (a === a / 1) {
    ilgis = `${a}`.length
  } else {
    console.log(`Pateikta netinkamo tipo reikšmė.`);
  }
  return ilgis;
}
console.log(skaitmenuKiekisSkaiciuje(simts));
console.log(skaitmenuKiekisSkaiciuje(stuke));
console.log(skaitmenuKiekisSkaiciuje(belekiek));
console.log(skaitmenuKiekisSkaiciuje(bl));
console.log(skaitmenuKiekisSkaiciuje(asd));
console.log(skaitmenuKiekisSkaiciuje(qwert));


//4


// let bmis = 0;
// function bmi(weight, height) {
//   bmis = weight / (Math.pow(height, 2));
//   if (bmis <= 18.5) {
//    console.log(`under`);
//   } else if (bmis <= 25.0) {
//    console.log(`norm`);
//   } else if (bmis <= 30.0) {
//     console.log(`over`);
//   } else {
//   console.log(`obese`);
//   }
//   return bmis;
// }

// console.log(bmis);
// console.log(bmi(59.8, 1.56));

// function getGrade (s1, s2, s3) {
//   grade = (s1 + s2 + s3) / 3;
//     if (grade <= 100 && grade >= 90) {
//       return `A`;
//     } else if (grade < 90  && grade >= 80) {
//       return `B`;
//     } else if (grade < 80 && grade >= 70) {
//       return `C`;
//     } else if (grade < 70 && grade >= 60) {
//       return `D`;
//     } else {
//       return `F`;
//     }
// }

// function repeatStr (n, s) {
//   let repeated = ` `;
//   for (let i = 0; i <= n; i++) {
//     repeated = repeated + s;
//   }
//   return repeated;
// }
// console.log(repeatStr(5, `hello`));

