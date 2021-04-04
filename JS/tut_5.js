// type conversion and corision

// String Conversion
let myvar;
myvar = 34;
console.log(myvar, typeof myvar);
myvar = String(34);// 34.tostring()
console.log(myvar, typeof myvar);

// Con to Number: -> 
console.log(Number("354682"));

// Parsint and ParsFloat
let num1 = parseInt("34.256");
let num2 = parseFloat("34.256");
console.log(num1);
console.log(num2);

// setting precsiion
let set_pre = 24.32652365;
console.log(set_pre.toFixed(2));
