const firstname = `vardas`;
const lastname = `pavarde`;
const age = 50
const ismarried = true;

const people = [
{
    name: `Ona`,
    age: 27,
    Married: true,
    marks: [10, 2, 10, 1, 5]
},
{
    name: `petras`,
    age: 57,
    Married: false,
    marks: [10, 2, 10, 1, 5]
},
{
    name: `martyte`,
    age: 27,
    Married: true,
    marks: [10, 2, 10, 1, 5]
},
{
    name: `antanas`,
    age: 17,
    Married: true,
    marks: [10, 2, 10, 1, 5]
},
];



// const pn = people[3][`name`];
// console.log(pn);






// const info = people[3];
// console.log(info);



const students = [
    {
        name: `petriukas`,
        dob: 2015,
        marks: [],
        gender: true,
        responsibleHumans: [
                            {
                                name:`lukas`,
                                dob: 1999,
                                phone: [86868686868,
                                        86577373733
                                        ],
                                email: [`jonas@jon.com`,
                                        `petras@pet.com`],
                                address: {
                                    country: `LTU`,
                                    city: `Vilnius`,
                                    street: `Laisves pr.`,
                                    building: 1,
                                    apartment: 13,
                                }
                            },
                            {
                                name:`jonas`,
                                dob: 1999,
                                phone: [86868686868,
                                    86868686868,
                                    86868686868,
                                        86577373733
                                        ],
                                email: [`jonas@jon.com`,
                                        `petras@pet.com`],
                                address: {
                                    country: `LTU`,
                                    city: `Vilnius`,
                                    street: `Laisves pr.`,
                                    building: 1,
                                    apartment: 13,
                                }
                            },
                            {
                                name:`gaidelis`,
                                dob: 1999,
                                phone: [86868686868,
                                        86868686868,
                                        86577373733
                                        ],
                                email: [`jonas@jon.com`,
                                        `petras@pet.com`],
                                address: {
                                    country: `LTU`,
                                    city: `Vilnius`,
                                    street: `Laisves pr.`,
                                    building: 1,
                                    apartment: 13,
                                }
                            },

                         ]
    }
];

const resphumans = students[0][`responsibleHumans`];
// console.log(resphumans);

for (const human of resphumans) {
    console.log(human[`name`]);
    for (const phone of human[`phone`]) {
        console.log(`-`, phone);
    }
}


console.log(students[0].responsibleHumans[1].address.street,
    students[0].responsibleHumans[1].address.building
    );