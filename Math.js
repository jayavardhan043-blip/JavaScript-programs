let a = 10;
let b = 25;
let c = 15;
let num = -45;
let decimal = 6.7;

//max and min 
console.log("Maximum:", Math.max(a, b, c));
console.log("Minimum:", Math.min(a, b, c));

//absolute value
console.log("Absolute:", Math.abs(num)); 

//square root
console.log("Square Root of 64:", Math.sqrt(64));

//power
console.log("5^3 =", Math.pow(5, 3));

//round methods
console.log("Round:", Math.round(decimal));
console.log("Ceil:", Math.ceil(decimal));
console.log("Floor:", Math.floor(decimal));
console.log("Truncate:", Math.trunc(decimal));

//random number 
console.log("Random Number:", Math.random()); 
console.log("Random Number:", Math.floor(Math.random() * 10) + 1);  

//constant
console.log("PI:", Math.PI);

//logarithm
console.log("Natural Logarithm of 10:", Math.log(10));
console.log("log10 of 100:", Math.log10(100));