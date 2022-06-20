const str = `labas rytas lietuva`;
const words = str.split(` `);
const wordcount = words.length;
console.log(words);
console.log(wordcount);

const str2 = `Vasara`;
const words2 = str2.split(``)
console.log(words2);


const person = `vardenis pavardenis`;
const inicialai = person
    .split(` `)
    .map(s => s[0])
    .join(`.`) + `.`;
console.log(inicialai);

//same as below


let inicialai2 = person[0];
for (let i = 1; i < person.length; i++) {
    const letter = person[i];
    if (person[i-1] === ` `) {
        inicialai2 += `.` + letter;
    }
}
inicialai2 += `.`
console.log(inicialai2);


function find_average(array) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i <= array.lenght; i++) {
      count = count + array[i]
      sum++
    }
    return count / sum 
    }
