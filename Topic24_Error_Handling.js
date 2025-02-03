    // try catch 
    
    try {
        let result = x * 10; // 'x' is not defined
    } catch (error) {
        document.getElementById("error_handling").innerHTML = "Error: " + error.message;
    }

//  throw 
function validateInput() {
    try {
        let input = document.getElementById("userInput").value;
        if (input === "") {
            throw "Input cannot be empty!";
        }
        document.getElementById("error_handling").innerHTML = "You entered: " + input;
    } catch (error) {
        document.getElementById("error_handling").innerHTML = "Error: " + error;
    }
}

//  Error
function checkNumber() {
    try {
        let num = document.getElementById("numberInput").value;
        if (num < 0) {
            throw new Error("Negative numbers are not allowed!");
        }
        document.getElementById("error_handling").innerHTML = "Valid number: " + num;
    } catch (error) {
        document.getElementById("error_handling").innerHTML = "Error: " + error.message;
    }
}