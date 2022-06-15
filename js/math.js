// const operations = [
    
//      (a, b) => a + b,
//      (a, b) => a - b,
//      (a, b) => a * b,
//      (a, b) => a / b,


// ];

// const opsym = [`+`, `-`, `*`, `/`]


// const usern1 = 7;
// const usern2 = 5;
// const useract = 2;

// const answr = operations[useract](usern1, usern2);

// console.log(usern1, opsym[useract], usern2, `=`, answr);

// const operations = [
    
//     [(a, b) => a + b, `+`],
//     [(a, b) => a - b, `-`],
//     [(a, b) => a * b, `*`],
//     [(a, b) => a / b, `/`],


// ];



// const usern1 = 7;
// const usern2 = 5;
// const useract = 0;

// const userfunc = operations[useract][0];
// const usersym = operations[useract][1];

// const answr = userfunc(usern1, usern2);

// console.log(usern1, usersym, usern2, `=`, answr);


// math su array ^


const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};


const usern1 = 7;
const usern2 = 5;
const useract = `-`; // kintamasis <-

const userfunc = operations[useract];

const answr = userfunc(usern1, usern2);

console.log(usern1, useract, usern2, `=`, answr);

// math as object ^
