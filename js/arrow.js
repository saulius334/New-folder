const n1 = 7;
const n2 = 5;


function stckplotas (a,b) {
    return a * b;
}

function kvdrplotas (a) {
    return a * a;
}

const plotas = n1 === n2 ? kvdrplotas : stckplotas;

console.log(plotas(n1, n2));



//arrow function
const daugybe = (a, b) => {
    return a * b;
}
console.log(daugybe(7, 5));

// kai logikos bloke yra tik 1 procedura tai nenaudojam {} ir return
const dalyba = (a, b) =>  a / b;
console.log(dalyba(7, 5))

//kai parametru bloke yra tik 1 parametras (pvz. (a) tai skliaustu nereikia)
const kvadratas = a =>  a ** 2;
console.log(kvadratas(7))