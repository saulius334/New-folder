// const marks = [10, 2, 4, 6, 7, 2];

// const minmark = Math.min(...marks)
// console.log(minmark);

// const maxmark = Math.max(...marks);
// console.log(maxmark);

// const pirmas = [7, 8, 9];
// const antras = [77, 88, 99];
// const pirmasantras = [...pirmas, ...antras];
// const antraspirmas = [antras, pirmas];
// console.log(pirmasantras);
// console.log(antraspirmas);

// let word = ``;

// const mokiniai = [`martye`, `petras`, `baldzius`, `alabama`];
// console.log(mokiniai);

// const mokiniaicopy = [...mokiniai];
// console.log(mokiniaicopy);

// mokiniaicopy[0] = `dupas`;
// console.log(mokiniaicopy);
// console.log(mokiniai);

// let sum = 0;
// function positiveSum(a) {
//     for (i = 0; i <= a.length - 1; i++) {    
//         if (a[i] > 0) {
//           console.log(a);
//     sum = sum + a[i];
//     return sum
//   }
//   }
// }


// const nmb = [1,-4,7,12];
// console.log(positiveSum(nmb));
// console.log(nmb);
// console.log(sum);

let number = 0;
var summation = function (num) {
 for (i = 0; i<= num; i++) {
   number = number + i;
   return number;
 }
}
const numb = 5;
console.log (summation(numb))