const marks = [10, 2, 5, 2 , 1];


// tiesiog for
for (let i = 0; i<marks.length; i++) {
    const mark = marks[i];
    console.log(mark);
}
console.log(`-------for-of-------`);
//for-of

for (const mark of marks) {
    console.log(mark);
}

console.log(`--------while------`);
// while
let i = 0;
while (i < marks.length) {
const mark = marks[i];
console.log(mark);
i++
}
//while paklausia pirma, poto daro ///////// do-while pirma padaro, o poto klausia ar pasiektas 
console.log(`--------dowhile------`);
//do-while
let i2 = 0;
do {
    const mark = marks[i2];
    console.log(mark);
    i2++
} while (i2 < marks.length);

console.log(`-----foreach---------`);
// foreach

marks.forEach(mark => {
    console.log(mark);
})
console.log(`-----map---------`);

// map            kaip modifikuoti kiekviena nari

const rezMap = marks
        .map( mark => mark * 2)
        .map(mark => mark > 10 ? 10 : mark);
console.log(marks);
console.log(rezMap);

// galima sudeti i viena eilute naudojant ternary
// const rezMap = marks
//         .map( mark => mark * 2 > 10 ? 10 : mark * 2)
// console.log(marks);
// console.log(rezMap);


console.log(`------filter--------`);

// filter

const filterMarks = marks
        .filter(mark => mark >= 2)
        .filter(mark => mark <= 5);
console.log(marks);
console.log(filterMarks);

// efektyviau, sudeta i viena eilute

const filterMarkss = marks
        .filter(mark => mark >= 2 && mark <= 5)
console.log(marks);
console.log(filterMarkss);

console.log(`------map/filter--------`);

// map and filter combo

const mapFilter = marks
        .map(mark => mark * 2)          // viska padaugina * 2
        .filter(mark => mark > 5);          // spausdina mark tik virs 5

console.log(mapFilter);


console.log(`--------------`);

// reduce

// total = pirmas skaicius array

const sumReduce = marks.reduce((total, mark) => total + mark); // susumavo

const sumReduce20 = marks.reduce((total, mark) => total + mark, 20);
console.log(sumReduce);
console.log(sumReduce20);

const difReduce = marks.reduce((total, mark) => total - mark); // sudifavo

const difReduce20 = marks.reduce((total, mark) => total - mark, 20);
console.log(difReduce);
console.log(difReduce20);

console.log(`-----sort---------`);
//sort
const list = [10, 2, 8, 4, 6, 1, 123, 5, 90]
const minMaxlist = [...list].sort((a, b) => a - b);



console.log(list);
console.log(minMaxlist);

const strlist = [`g`, `a`, `f`, `w`]
const minMaxstrlist = [...strlist].sort()
const maxminstrlist = [...strlist].sort((a, b) => a > b ? -1 : 1);

console.log(strlist);
console.log(minMaxstrlist);
console.log(maxminstrlist);