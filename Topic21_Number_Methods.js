// toFixed(n)	
// parseInt(value)	
// parseFloat(value)	
// Math.round(num)	
// Math.floor(num)	
// Math.ceil(num)	
// Math.random()	

// toFixed(n)

var num = 5.6729;
hold_number = document.getElementById("number_method");
hold_number.innerHTML +=  num + "<br>";
hold_number.innerHTML +="To Fixed  " + num.toFixed(2) + "<br><br>";

// parseInt
var num = "5.6729";
hold_number.innerHTML += num + " " +typeof num + "<br>";
num = parseInt(num);
hold_number.innerHTML +="ParseInt " + num + " " +typeof num + "<br><br>";

// parseFloat
var num = "5.6729";
hold_number.innerHTML += num + " " +typeof num + "<br>";
num = parseFloat(num);
hold_number.innerHTML +="ParseFloat " + num + " " +typeof num + "<br><br>";    

// Math.round(num)
var num = 5.6729;
hold_number.innerHTML += num + "<br>";
num = Math.round(num);
hold_number.innerHTML +="Round " + num + "<br><br>";

// Math.floor(num)
var num = 6.6729;
hold_number.innerHTML += num + "<br>";
num = Math.floor(num);
hold_number.innerHTML +="Floor "+ num + "<br><br>";

// Math.ceil(num)
var num = 8.6729;
hold_number.innerHTML += num + "<br>";
num = Math.ceil(num);
hold_number.innerHTML +="Ceil " + num + "<br><br>";

// Math.random()
var num = Math.random();
hold_number.innerHTML +="Random "+ num + "<br>";

num = Math.random() * 100;
hold_number.innerHTML +="Random with X 100 " + num + "<br>";

num = Math.floor(Math.random() * 100);
hold_number.innerHTML +="Random with Floor and X by 100  " + num + "<br>";

num = Math.ceil(Math.random() * 100);
hold_number.innerHTML +="Random with Cei and X by 100 " + num + "<br>";  