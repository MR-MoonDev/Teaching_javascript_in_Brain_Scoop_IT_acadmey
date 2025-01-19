// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y

let equal = 20;
document.getElementById("equal").innerHTML = "equal " + equal;

let plusEqual = (equal += 1);

document.getElementById("plusEqual").innerHTML = "plusEqual " + plusEqual;

let minusEqual = (equal -= 1);

document.getElementById("minusEqual").innerHTML = "minusEqual " + minusEqual;

let multiplyEqual = (equal *= 1);

document.getElementById("multiplyEqual").innerHTML =
  "multiplyEqual " + multiplyEqual;

let divideEqual = (equal /= 1);

document.getElementById("divideEqual").innerHTML = "divideEqual " + divideEqual;

let modulusEqual = (equal %= 1);

document.getElementById("modulusEqual").innerHTML =
  "modulusEqual " + modulusEqual;

let sqaureEqual = (equal **= 1);

document.getElementById("sqaureEqual").innerHTML = "sqaureEqual " + sqaureEqual;
