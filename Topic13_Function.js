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
    let sum = num1 + num2; // Calculate the sum
    return sum; // Return the numeric result
}

let sumResult = calculateSum(10, 20); // Store the result of the sum
document.getElementById("fun2").innerHTML += `${sumResult}</br>`;

// Add 2 to the result of the sum and display
let sumResultWithExtra = calculateSum(10, 20) + 2;
document.getElementById("fun2").innerHTML += `${sumResultWithExtra}</br>`;



