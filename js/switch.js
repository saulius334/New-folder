// const day = 2;

// switch (day) {
//     case 1:
//         console.log(`pirmadienis`);
//         break;

//     case 2:
//         console.log(`antradienis`);
//         break;

//     case 3:
//         console.log(`treciadienis`);
//         break;

//     default:
//         console.log(`tokios dienos nera`);
// }


// const weekday = 1;

// switch (weekday) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log(`darbo diena`);
//         break;
//     case 6:
//     case 7:
//         console.log(`savaitgalis`);
//         break;
//         default: 
//         console.log(`tokios dienos nera`);
//         break;
// }

const money = [5, 10, 20, 50, 100, 500, 5, 10, 20];
const minmoney = 80;
const hand = [];
let handtotal = 0;
let i = 0;

for (let i = 0; i < money.length; i++) {
    const value = money[i];
    handtotal += value;
    hand.push(value)
    console.log(`${i}) ${value} -> total: ${handtotal}`, hand);
    if (handtotal >= minmoney) {
        break;
    }
}