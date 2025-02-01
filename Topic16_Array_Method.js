// define array
let fruit = ['apple', 'banana', 'cherry'];
document.getElementById('array_method').innerHTML += (`${fruit}<br>`);

// length of array

document.getElementById('array_method').innerHTML += (`${fruit.length}<br>`);

// add element to the start of array

fruit.unshift('orange');
document.getElementById('array_method').innerHTML += (`${fruit}<br>`);

// add element to the end of array

fruit.push('kiwi');
document.getElementById('array_method').innerHTML += (`${fruit}<br>`);

// add element to the middle of array

fruit.splice(2, 0, 'mango');
document.getElementById('array_method').innerHTML += (`${fruit}<br>`);

// remove element from the start of array
fruit.shift();
document.getElementById('array_method').innerHTML += (`${fruit}<br>`);

// remove element from the end of array
fruit.pop();
document.getElementById('array_method').innerHTML += (`${fruit}<br>`);

//  remove element from the middle of array
fruit.splice(2, 1);
document.getElementById('array_method').innerHTML += (`${fruit}<br>`);

// find index of element

let index = fruit.indexOf('banana');
document.getElementById('array_method').innerHTML += (`${index}<br>`);

// remove element by index
fruit.splice(index, 1);
document.getElementById('array_method').innerHTML += (`${fruit}<br>`);

// copy array
let copyFruit = fruit.slice();
document.getElementById('array_method').innerHTML += (`${copyFruit}<br>`);

// join array
let joinFruit = fruit.join(' & ');
document.getElementById('array_method').innerHTML += (`${joinFruit}<br>`);

// reverse array
fruit.reverse();
document.getElementById('array_method').innerHTML += (`${fruit}<br>`);

// sort array
fruit.sort();
document.getElementById('array_method').innerHTML += (`${fruit}<br>`);

// sort number array
let number = [2, 5, 1, 3, 4];
number.sort()
document.getElementById('array_method').innerHTML += (`${number}<br>`);

// sort number array
number.sort(function(a, b) {
    return a - b;
});
document.getElementById('array_method').innerHTML += (`${number}<br>`);

// Map array
let number2 = number.map(function(value) {
    return value * 2;
});
document.getElementById('array_method').innerHTML += (`${number2}<br>`);