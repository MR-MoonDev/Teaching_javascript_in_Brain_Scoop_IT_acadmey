Asyn = document.getElementById("asynchronous");

//Synchronous

Asyn.innerHTML += "Start <br>";
for (let i = 0; i <= 3; i++) {
  Asyn.innerHTML += i + "<br>";
}

Asyn.innerHTML += "End<br><br>";

// Asynchronous

Asyn.innerHTML += "Start <br>";

setTimeout(() => {
  Asyn.innerHTML += "Middle<br><br>";
}, 2000);

Asyn.innerHTML += "End<br>";

// call back in Asynchronous

function fetchdata(callback) {
  setTimeout(() => {
    Asyn.innerHTML += "Hi ";
    callback("Muneeb  ");
  }, 2000);
}

function f1_callback() {
  Asyn.innerHTML += "Areeb <br> ";
}

fetchdata(f1_callback);

// pass parameter in Asynchronous

function f2_callback(name) {
  Asyn.innerHTML += name;
}
fetchdata(f2_callback);

