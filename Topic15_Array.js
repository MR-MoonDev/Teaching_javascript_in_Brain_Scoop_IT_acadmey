// array

let arrayname = ["item1", "item2", "item3"];

document.getElementById("array").innerHTML += `${arrayname}<br>`;

// after creating an array, we can add more elements to it

arrayname[4] = "item4";
document.getElementById("array").innerHTML += `${arrayname}<br>`;

//   create an array with 3 elements

let fruit_array = [];

fruit_array[0] = "item1";
fruit_array[1] = "item2";
fruit_array[3] = "item3";
document.getElementById("array").innerHTML += `${fruit_array}<br>`;

// using new keyword

let new_array = new Array("item1", "item2", "item3");
document.getElementById("array").innerHTML += `${new_array}<br>`;
