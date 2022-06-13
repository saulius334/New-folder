const marks = [10, 2, 4, 6, 7, 2];

const minmark = Math.min(...marks)
console.log(minmark);

const maxmark = Math.max(...marks);
console.log(maxmark);

const pirmas = [7, 8, 9];
const antras = [77, 88, 99];
const pirmasantras = [...pirmas, ...antras];
const antraspirmas = [antras, pirmas];
console.log(pirmasantras);
console.log(antraspirmas);



const mokiniai = [`martye`, `petras`, `baldzius`, `alabama`];
console.log(mokiniai);

const mokiniaicopy = [...mokiniai];
console.log(mokiniaicopy);

mokiniaicopy[0] = `dupas`;
console.log(mokiniaicopy);
console.log(mokiniai);