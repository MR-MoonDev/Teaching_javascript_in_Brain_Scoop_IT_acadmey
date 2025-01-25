// Function without parameters


function displayMessageWithoutParameter() {
    document.getElementById("fun").innerHTML +=
        "FUNCTION WITHOUT PARAMETER</br>";
}
displayMessageWithoutParameter();

// Function with parameters


function displayMessageWithParameter(message) {
    document.getElementById("fun").innerHTML += `${message}</br>`;
}

displayMessageWithParameter("FUNCTION WITH PARAMETER");

// Function without a return value

function displaySumWithoutReturn(num1, num2) {
    document.getElementById("fun").innerHTML += `${num1 + num2}</br>`;
}

displaySumWithoutReturn(10, 25);

// Function with a return value


function calculateSum(num1, num2) {
    let sum = num1 + num2;
    return sum; // Return the numeric result
}

let sumResult = calculateSum(10, 20);
document.getElementById("fun2").innerHTML += `${sumResult}</br>`;


// Add 2 to the result of the sum and display


let sumResultWithExtra = calculateSum(10, 20) + 2;
document.getElementById("fun2").innerHTML += `${sumResultWithExtra}</br>`;


//  arrow functon

const arrow_fun = () => {
    document.getElementById("fun2").innerHTML += `${" arrow function"}</br>`;

}

let arr_fun_holder = arrow_fun();
document.getElementById("fun2").innerHTML += `Arrow function without parameter ${arr_fun_holder}</br>`;

// arrow function with parameter

const arrow_fun_with_parameter = (a, b) => {
    let arrow_fun_holder = a + b;
    return arrow_fun_holder;
}

let a = arrow_fun_with_parameter(2, 3)
let arrow_fun_with_parameter_holder = a;
document.getElementById("fun2").innerHTML += `Arrow function with parameter ${arrow_fun_with_parameter_holder}</br>`;


function get_name_fun(){

var takename =    document.getElementById("getname").value;
document.getElementById("fun2").innerHTML += ("Hello "+ takename + '</br>')
document.getElementById("getname").value = "";// input clear
}



