// Equality (==)
document.getElementById("comparision").innerHTML = "Equality (==)<br>";
document.getElementById("comparision").innerHTML += (5 == "5") + "<br>"; // true
document.getElementById("comparision").innerHTML += (0 == false) + "<br>"; // true
document.getElementById("comparision").innerHTML += (null == undefined) + "<br>"; // true

// Strict Equality (===)
document.getElementById("comparision").innerHTML += "Strict Equality (===)<br>";
document.getElementById("comparision").innerHTML += (5 === "5") + "<br>"; // false
document.getElementById("comparision").innerHTML += (0 === false) + "<br>"; // false
document.getElementById("comparision").innerHTML += (null === undefined) + "<br>"; // false

// Inequality (!=)
document.getElementById("comparision").innerHTML += "Inequality (!=)<br>";
document.getElementById("comparision").innerHTML += (5 != "5") + "<br>"; // false
document.getElementById("comparision").innerHTML += (5 != 6) + "<br>"; // true
document.getElementById("comparision").innerHTML += (false != 0) + "<br>"; // false

// Strict Inequality (!==)
document.getElementById("comparision").innerHTML += "Strict Inequality (!==)<br>";
document.getElementById("comparision").innerHTML += (5 !== "5") + "<br>"; // true
document.getElementById("comparision").innerHTML += (5 !== 5) + "<br>"; // false
document.getElementById("comparision").innerHTML += (false !== 0) + "<br>"; // true

// Greater Than (>)
document.getElementById("comparision").innerHTML += "Greater Than (>)<br>";
document.getElementById("comparision").innerHTML += (10 > 5) + "<br>"; // true
document.getElementById("comparision").innerHTML += (5 > 10) + "<br>"; // false

// Greater Than or Equal To (>=)
document.getElementById("comparision").innerHTML += "Greater Than or Equal To (>=)<br>";
document.getElementById("comparision").innerHTML += (10 >= 5) + "<br>"; // true
document.getElementById("comparision").innerHTML += (5 >= 5) + "<br>"; // true
document.getElementById("comparision").innerHTML += (4 >= 5) + "<br>"; // false

// Less Than (<)
document.getElementById("comparision").innerHTML += "Less Than (<)<br>";
document.getElementById("comparision").innerHTML += (5 < 10) + "<br>"; // true
document.getElementById("comparision").innerHTML += (10 < 5) + "<br>"; // false

// Less Than or Equal To (<=)
document.getElementById("comparision").innerHTML += "Less Than or Equal To (<=)<br>";
document.getElementById("comparision").innerHTML += (5 <= 10) + "<br>"; // true
document.getElementById("comparision").innerHTML += (5 <= 5) + "<br>"; // true
document.getElementById("comparision").innerHTML += (6 <= 5) + "<br>"; // false

// Comparison with NaN
document.getElementById("comparision").innerHTML += "Comparison with NaN<br>";
document.getElementById("comparision").innerHTML += (NaN == NaN) + "<br>"; // false
document.getElementById("comparision").innerHTML += (Number.isNaN(NaN)) + "<br>"; // true

// Comparison with null and undefined
document.getElementById("comparision").innerHTML += "Comparison with null and undefined<br>";
document.getElementById("comparision").innerHTML += (null == undefined) + "<br>"; // true
document.getElementById("comparision").innerHTML += (null === undefined) + "<br>"; // false

// Chaining Comparisons
document.getElementById("comparision").innerHTML += "Chaining Comparisons<br>";
let x = 10;
document.getElementById("comparision").innerHTML += (x > 5 && x < 15) + "<br>"; // true
document.getElementById("comparision").innerHTML += (x < 5 || x > 15) + "<br>"; // false
