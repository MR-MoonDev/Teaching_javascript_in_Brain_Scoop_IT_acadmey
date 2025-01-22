//alert

alert("This is an alert message!");


// confirm

const result = confirm("Are you sure you want to proceed?");
if (result) {
    document.getElementById("popup_fun").innerHTML+=("You Click OK button"+"</br>")
  
} else {
  document.getElementById("popup_fun").innerHTML+=("User clicked Cancel"+"</br>")

}

//   Prompt
const name = prompt("What is your name?");
if (name) {
    document.getElementById("popup_fun").innerHTML+=(`Hello, ${name}!`)

} else {
    document.getElementById("popup_fun").innerHTML+=("No name entered")

}

