const text = `labas rytas lietuva`;

function charcount(str) {




const raides = {

};

    for(const Symbol of str) {
        if(raides[Symbol]) {
            raides[Symbol]++;
        } else {
       raides[Symbol] = 1;
        }
    }

return raides;
}


console.log(charcount(text));

const bigtext = `as tu jis jos mes jie gal ir tu as tu jis jos mes jie gal ir tu as tu jis jos mes jie gal ir tu as tu jis jos mes jie gal ir tu`;

 function wordcount(str) {
    const uniqwords = {}
    const words = str.split(` `)
    
    for(const word of words) {
        if (uniqwords[word]) {
            uniqwords[word]++;
        } else {
            uniqwords[word] = 1;
        }
    }

    return uniqwords;
 }



 console.log(wordcount(bigtext));
let uniquewordscount = 0;
 const dic = wordcount(bigtext);
    for (const key in dic) {
        uniquewordscount++
        console.log(key, `)`, dic[key]);
    }

    console.log(`unique words:${uniquewordscount}`);


    let sum = 0;
function positiveSum(arr) {
  for (let i = 0; i<=arr.lenght; i++) {
    const number = arr[i];
      if (number > 0) {
        sum = sum + number;
      }
  }
  return sum;
}