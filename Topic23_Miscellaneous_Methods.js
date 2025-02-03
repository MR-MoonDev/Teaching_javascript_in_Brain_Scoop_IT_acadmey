// setTimeout(fn, ms)	
// setInterval(fn, ms)	
// clearTimeout(id)	
// clearInterval(id)	
// alert(msg)	
// prompt(msg)	
// confirm(msg)	

// time out
setTimeout(() => {
    document.getElementById("miscellaneous_method").innerHTML += "Set time out!<br>";
     
}, 3000);  

// clear set time out

let timeoutId  = setTimeout(() => {
    document.getElementById("miscellaneous_method").innerHTML += "clear timeout!<br>";
clearTimeout(timeoutId ) 
     
},3000);

// set interval

let intervalId = setInterval(() => {
  document.getElementById("miscellaneous_method").innerHTML += "non stop<br>";
}, 2000); 

// clear interval 
let count = 0;  
 intervalId = setInterval(() => {
  document.getElementById("miscellaneous_method").innerHTML += "stop<br>";
  count++;  

  if(count === 3) {  
    clearInterval(intervalId); 
  document.getElementById("miscellaneous_method").innerHTML += "Interval stopped after 3 iterations<br>";
  }
}, 2000); 

