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