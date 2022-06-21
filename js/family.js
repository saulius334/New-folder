// const family = [
//     {
//         name: `petras`,
//         age: 99,
//     },
//     {
//         name: `saulius`,
//         age:18,
//     },
// ];

// function oldest(list) {
//     let age = 0;
// for (const person of list) {
//     if (person.age > age) {
//         age = person.age
//     }
// }
// return age
// }

// console.log(oldest(family));

const family = [
    {
        name: `petras`,
        age: 99,
        children: [
            {
                name: `kestas`,
                age: 50,
            },
            {
                name: `zosia`,
                age: 100,
            },
        ]
    },
    {
        name: `saulius`,
        age:18,
        children: [
            {
                name: `kestaukas`,
                age: 50,
            },
            {
                name: `zosiabl`,
                age: 109,
            },
        ]
    },
];

function oldest(list) {
    let age = 0;
for (const person of list) {
    if (person.age > age) {
        age = person.age;
    }
    if (person.children && person.children.length > 0) {
        const oldestchild = oldest(person.children);
        if (oldestchild > age) {
            age = oldestchild;
        }
    }
}
const wtf = family.getKeyByVa
return `is` + wtf
}

console.log(oldest(family));