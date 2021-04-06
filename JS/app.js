// 5 type of loops
// for 
// for…in 
// forEach
// while 
// do…while 

// For loop

for (var i = 1; i <= 5; i++) {
    console.log(i);
}

// For In loop

var person = {name: "Harry", language: "JavaScript", age: 20};
// Loop through all the properties in the object  
for(var i in person) {  
console.log( i + " = " + person[i]); 
}

// For each loop
const  alpha = ['a', 'b', 'c'];
for (let i = 0; i < alpha.length; i++) {
console.log(alpha[i]);
}

// While Loop
let i = 1, n = 100;
while (i <= n) {
    console.log(i);
    i += 1;
}