

const username = 'Saulius';
console.log(username);

const city = "Vilnius";
console.log(city);

const kabute1 = "vienguba ' kabute";
console.log(kabute1); 

const kabute2 = 'vienguba " kabute';
console.log(kabute2); 

const kabute3 = 'vienguba \" kabute ir \' dviguba';
console.log(kabute3); 

const kelioseilutes = '<div>\
<p>katu</p>\
</div>';
console.log(kelioseilutes);

const parosmetas = 'rytas';
const username2 = 'Gabi';
const hello = 'labas ' + parosmetas + ', ' + username2 + ' !';
console.log(hello);

const labs = `labas ${parosmetas}, ${username2} !`; // su backtickais `` reikia daryt ${const}
console.log(labs);

const temp = 23;
const nuotaika = 'gera';
const orai = `siandien yra ${temp} (Jutimine: ${temp + 3}) laipsniai silumos ir mano nuotaika yra ${nuotaika}!`
console.log(orai);
