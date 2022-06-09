// TERNARY operator

//supaprastintas if/else ??
//null = neegzistuojanti reiksme(einamuoju metu) kuria planuojame gauti


const a = 4;
const b = 2;
let ats = null;
if (a > b) {
    ats = `daugiau`;
} else {
    ats = `nedaugiau`;
}
console.log(ats);
console.log(`--------------------------------`);

const tern = a > b ? `daugiau` : `nedaugiau`;
console.log(tern);

const egz = 1 ? 2 ? 3 : 4 : 5;
console.log(egz);



// skaiciai viskas taip isskyrus 0 NE
// true = tiap, false = ne;
//null = false
// string viskas true isskyrus tuscias string -> ""
if (0) {
    console.log(`tiap`);
} else {
    console.log(`ne`);
}


