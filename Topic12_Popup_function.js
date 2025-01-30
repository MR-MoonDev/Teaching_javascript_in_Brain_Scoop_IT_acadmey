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
//   Prompt Table

let table_num = prompt("Enter Table Number")
for (let i = 1; i <= 10; i++) {
    document.getElementById("popup_fun").innerHTML+=(`${table_num} * ${i} = ${table_num * i}`+"</br>")
}

// leap year
let year = prompt("Enter Year")
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    document.getElementById("popup_fun").innerHTML+=(`${year} is a Leap Year`)

}