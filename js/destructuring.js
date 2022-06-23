console.clear()

const person = {
    name: `petras`,
    age: 90,
    isMarried: true,
  children: [
    {
        name: `bart`,
        age: 50,
    },
    {
        name: `liza`,
        age: 10,
    }
  ]
}

// const name = person.name;
// const isMarried = person.isMarried;
// const age = person.age;

const {age, children, ...otherinfo} = person;
const [bart, liza] = children
console.log(age);
console.log(bart);
console.log(liza);
console.log(children);
console.log(otherinfo);

const marks = [1, 2, 3, 4, 5]
const first = marks[0]
const secnd = marks[1]

console.log(first);
console.log(secnd);

const [firster, second, five, ...other] = marks;
console.log(firster);
console.log(second);
console.log(five);
console.log(other);