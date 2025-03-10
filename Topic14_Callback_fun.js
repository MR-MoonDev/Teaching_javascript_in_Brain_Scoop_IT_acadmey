// CallBack funtion

function fun_One(call_back) {
  document.getElementById("callBack_funID").innerHTML += "hello ";
  call_back();
}

function callback() {
  document.getElementById("callBack_funID").innerHTML += "i'm call back function" + "</br>";
}
 
fun_One(callback);

// setTimeout(function, delay, param1, param2, ...);

// set time out

t = 2000

setTimeout(() => {
  document.getElementById("callBack_funID").innerHTML +="This runs after 2 seconds" + "</br>";
},t);


setTimeout(() => {
  document.getElementById("callBack_funID").innerHTML +="This runs after 3 seconds" + "</br>";
  
}, 3000);

function setTime_fun(name, age) {
  document.getElementById("callBack_funID").innerHTML += "Set Time out Function " + name + age + "</br>";
}
setTimeout(setTime_fun, 3000, "Muneeb", 12);


setTimeout(() => setTime_fun("Muneeb", 22), 3000);

//   Asynchronous function

function fetching_data(callBack) {
  document.getElementById("callBack_funID").innerHTML +=
    "Fetching data..." + "</br>";

  setTimeout(() => {
    document.getElementById("callBack_funID").innerHTML +=
      "Data fetched." + "</br>";
    callBack();
  }, 6000);
}

function processingdata() {
  document.getElementById("callBack_funID").innerHTML +=
    "Processing data " + "</br>";
}

fetching_data(processingdata);
