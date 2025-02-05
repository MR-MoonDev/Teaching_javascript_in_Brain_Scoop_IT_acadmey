// Function without parameters

function displayMessageWithoutParameter() {
  document.getElementById("fun").innerHTML += "FUNCTION WITHOUT PARAMETER</br><br>";
}

displayMessageWithoutParameter();


// Function with parameters

function displayMessageWithParameter(message) {
  document.getElementById("fun").innerHTML += `${message}</br><br>`;
}

displayMessageWithParameter("FUNCTION WITH PARAMETER");

// Function without a return value

function displaySumWithoutReturn(num1, num2) {
  document.getElementById("fun").innerHTML += `without return  ${ (num1 + num2)}</br><br>`;
}

displaySumWithoutReturn(10, 25);
document.getElementById("fun").innerHTML = displaySumWithoutReturn(10 , 28)


// Function with a return value

function calculateSum(num1, num2) {
  let sum = num1 + num2; // 10 + 20
  return sum ; // Return the numeric result
}

let sumResult = calculateSum(10, 20);
document.getElementById("fun2").innerHTML += `with return ${sumResult}</br><br>`;

// Add 2 to the result of the sum and display

let sumResultWithExtra = calculateSum(10, 20) + 2;
document.getElementById("fun2").innerHTML += `add 2 in with return ${sumResultWithExtra}</br><br>`;



function Aayanabout(name,phone){
  let detail = name + phone;// Aayan + 0000
  return detail;
}
let holder = Aayanabout("Aayan","000000")

document.getElementById("fun2").innerHTML= `${holder}`
document.getElementById("fun2").innerHTML= `${holder} cast`


//  arrow function

const arrow_fun = () => {
  document.getElementById("fun2").innerHTML += `${" arrow function"}</br><br>`;
};

let arr_fun_holder = arrow_fun();
document.getElementById(
  "fun2"
).innerHTML += `Arrow function without parameter ${arr_fun_holder}</br><br>`;

// arrow function with parameter

const arrow_fun_with_parameter = (a, b) => {
  let arrow_fun_holder = a + b;
  return arrow_fun_holder;
};

let a = arrow_fun_with_parameter(2, 3);
let arrow_fun_with_parameter_holder = a;
document.getElementById(
  "fun2"
).innerHTML += `Arrow function with parameter ${arrow_fun_with_parameter_holder}</br><br>`;



// take value from input
function get_name_fun() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  document.getElementById("fun2").innerHTML += "sum of num1 and num2 =  " +  (num1+num2) + "</br><br>";
  document.getElementById("getname").value = ""; 
}

