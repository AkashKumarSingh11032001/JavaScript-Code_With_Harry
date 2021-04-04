// String Propertiees

// Concatination
const name = 'Akash';
const greeting = 'Good Day';
console.log(name +" "+greeting);

//lower case/ uper case
let n1 = "Akash hello";
console.log(n1 + " "+ n1.toLowerCase() + " " + n1.toUpperCase());
console.log(n1[2]);

// index of/ last indexof
console.log(n1.indexOf('sh'));
console.log(n1.lastIndexOf('sh'));
console.log(n1.endsWith('h'));
console.log(n1.substring(1,3));
console.log(n1.includes('sh'));
console.log(n1.slice(-4)); // console.log(n1.slice(0,3));
console.log(n1.split(' ')); // convet to array
console.log(n1.replace('hello','Good Day'));


// Template Litrals

let fruit1 = 'orange';
let fruit2 = 'apple';
// creating html
let myHtml = `Hello ${n1}   
<h1> Hello EveryOne </h1>
<p> you have ${fruit1} and ${fruit2}</p>

`;





