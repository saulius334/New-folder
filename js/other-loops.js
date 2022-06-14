const marks = [10, 2, 5, 2 , 1];


// tiesiog for
for (let i = 0; i<marks.length; i++) {
    const mark = marks[i];
    console.log(mark);
}
console.log(`--------------`);
//for-of

for (const mark of marks) {
    console.log(mark);
}

console.log(`--------------`);
// while
let i = 0;
while (i < marks.length) {
const mark = marks[i];
console.log(mark);
i++
}
//while paklausia pirma, poto daro ///////// do-while pirma padaro, o poto klausia ar pasiektas 
console.log(`--------------`);
//do-while
let i2 = 0;
do {
    const mark = marks[i2];
    console.log(mark);
    i2++
} while (i2 < marks.length);

console.log(`--------------`);
// foreach

marks.forEach(mark => {
    console.log(mark);
})
console.log(`--------------`);

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


console.log(`--------------`);

// filter

// const filterMarks = marks
//         .filter(mark => mark >= 2)
//         .filter(mark => mark <= 5);
// console.log(marks);
// console.log(filterMarks);

// efektyviau, sudeta i viena eilute

const filterMarks = marks
        .filter(mark => mark >= 2 && mark <= 5)
console.log(marks);
console.log(filterMarks);

console.log(`--------------`);

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