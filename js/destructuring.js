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
const {age: BartAge} = bart
const {age: LizaAge, name: Lizaname} = liza
console.log(`liza age:`, LizaAge, `Liza name:`, Lizaname);
console.log(`bart age:`, BartAge);
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


function info(...params) {
  return `info: ${params.length}`;
}
console.log(info());
console.log(info(1, 2, true, undefined, NaN, `lol`));
console.log(info(1, NaN, `lol`));
console.log(info( undefined, NaN, 1, `lol`));
console.log(info(1, 2, true, undefined, NaN, 2, `lol`));
console.log();
console.clear();
console.log(`----------------`);
function biggest(...list) {
return Math.max(...list)
}
console.log(biggest(2, 4, -2, -10, 9, 10));


function asd(firstname, lastname, ...other) {
  console.log(firstname);
  console.log(lastname);
  console.log(other);
  return `?`
}
console.log(asd(`saul`, `good`, `man`, 123, true));