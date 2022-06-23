console.clear()

const students = [
    {name: `petras`, marks: [10, 9, 8, 7, 6]},
    {name: `martyre`, marks: [7, 1, 8, 7, 6]},
    {name: `ona`, marks: [2, 9, 8, 7, 6, 9, 10, 10]},
    {name: `auls`, marks: [10, 10, 10, 10, 10, 10, 10, 10]},
];

for (let i = 0; i < students.length; i++) {
    const {name, marks} = students[i];

    let totalsum = 0;

    for (let m = 0; m < marks.length; m++){
        const mark = marks[m];
        totalsum += mark;
    }
    console.log(`${name} pazymiai yra ${marks}, o vidurkis yra ${totalsum / marks.length} `);
}

console.log(`---------------`);

for (const {name, marks} of students) {

    let totalsum = 0;

    for (const mark of marks){
        totalsum += mark;
    }
    console.log(`${name} pazymiai yra ${marks}, o vidurkis yra ${totalsum / marks.length} `);
}

console.log(`-----------------`);

for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m+=15) {
        for (let s = 0; s < 60; s+=10) {
            console.log(`${h}:${m < 10 ? `0` + m : m}:${s < 10 ? `0` + s : s}`);

        }
    }
}
