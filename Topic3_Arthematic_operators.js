// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement
document.getElementById("Artthematic").innerHTML += ("Addition    30+2 = " + (30 + 2) + ('</br>'));
document.getElementById("Artthematic").innerHTML += ("Subtraction 30-2 = " + (30 - 2) + ('</br>'));
document.getElementById("Artthematic").innerHTML += ("Division     30/2 = " + (30 / 2) + ('</br>'));
document.getElementById("Artthematic").innerHTML += ("Multiple    30*2 = " + (30 * 2) + ('</br>'));
document.getElementById("Artthematic").innerHTML += ("Square    30**2 = " + (30 ** 2) + ('</br>'));
document.getElementById("Artthematic").innerHTML += ("Modulus    30%20 = " + (30 % 2) + ('</br>'));
let post_Increment = 100;
let post_Decrement = 100
let pre_Increment = 100;
let pre_Decrement = 100
document.getElementById("Artthematic").innerHTML += (" post Increment  = " + (post_Increment++) + ('</br>'));
document.getElementById("Artthematic").innerHTML += (" post Decrement = " + (post_Decrement--) + ('</br>'));
document.getElementById("Artthematic").innerHTML += ("pre Increment   = " + (++pre_Increment) + ('</br>'));
document.getElementById("Artthematic").innerHTML += ("pre Decrement  = " + (--pre_Decrement) + ('</br>'));


