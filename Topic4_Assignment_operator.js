// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y

let equal = 20;
document.getElementById("assigment").innerHTML += ("equal " + (equal)+"</br>")

let plusEqual = (equal += 1);

document.getElementById("assigment").innerHTML += ("plusEqual " + (plusEqual)+"</br>")

let minusEqual = (equal -= 1);

document.getElementById("assigment").innerHTML += ("minusEqual " + (minusEqual)+"</br>")

let multiplyEqual = (equal *= 1);

document.getElementById("assigment").innerHTML +=
(  "multiplyEqual " + (multiplyEqual)+"</br>")

let divideEqual = (equal /= 1);

document.getElementById("assigment").innerHTML += ("divideEqual " + (divideEqual)+"</br>")

let modulusEqual = (equal %= 1);

document.getElementById("assigment").innerHTML +=
(  "modulusEqual " + (modulusEqual)+"</br>")

let sqaureEqual = (equal **= 1);

document.getElementById("assigment").innerHTML += ("sqaureEqual " + (sqaureEqual)+"</br>")
