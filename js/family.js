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

function oldest(list, depth = 0) {
    let age = 0;
    let name = ``
for (const person of list) {
    if (person.age > age) {
        age = person.age;
        name = person.name
    }
    if (person.children && person.children.length > 0) {
        const oldestchild = oldest(person.children, depth+1);
        if (oldestchild.age > age) {
            age = oldestchild.age;
            name = oldestchild.name
        }
    }
}
console.log(depth, {name, age});
return depth === 0 ? `${name} is ${age} years old` : {name, age};

}

console.log(oldest(family));