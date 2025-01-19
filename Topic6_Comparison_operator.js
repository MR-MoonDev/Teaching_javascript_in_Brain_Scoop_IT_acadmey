// Equality (==)
console.log("Equality (==)");
console.log(5 == "5"); // true
console.log(0 == false); // true
console.log(null == undefined); // true

// Strict Equality (===)

console.log("Strict Equality (===)");
console.log(5 == "5"); // true
console.log(0 == false); // true
console.log(null == undefined); // true

// Inequality (!=)

console.log("Inequality (!=)");
console.log(5 != "5"); // false
console.log(5 != 6); // true
console.log(false != 0); // false

// Strict Inequality (!==)

console.log("Strict Inequality (!==)");
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(false !== 0); // true

// Greater Than (>)

console.log(" Greater Than (>)");
console.log(10 > 5); // true
console.log(5 > 10); // false

// Greater Than or Equal To (>=)

console.log("Greater Than or Equal To (>=)");
console.log(10 >= 5); // true
console.log(5 >= 5); // true
console.log(4 >= 5); // false

// Less Than (<)

console.log("Less Than (<)");
console.log(5 < 10); // true
console.log(10 < 5); // false

// Less Than or Equal To (<=)

console.log("Less Than or Equal To (<=)");
console.log(5 <= 10); // true
console.log(5 <= 5); // true
console.log(6 <= 5); // false

// Comparison with NaN

console.log("Comparison with NaN");
console.log(NaN == NaN); // false
console.log(Number.isNaN(NaN)); // true

// Comparison with null and undefined

console.log("Comparison with null and undefined");
console.log(null == undefined); // true
console.log(null === undefined); // false

// Chaining Comparisons

console.log("Chaining Comparisons");
let x = 10;
console.log(x > 5 && x < 15); // true
console.log(x < 5 || x > 15); // false
