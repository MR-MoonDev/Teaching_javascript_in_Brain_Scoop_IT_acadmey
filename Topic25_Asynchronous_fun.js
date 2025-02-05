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

let promise_id = document.getElementById("promise");

var promise = new Promise((resolve, reject) => {
  promise_id.innerHTML += "Succsessful<br>";
  resolve(promise_id);
  promise_id.innerHTML += "reject<br>";
  reject(promise_id);
});

// promises with then and catch

var order = document.getElementById("promise");

function Book_order(category) {
  return new Promise((resolve, reject) => {
    order.innerHTML += "sir wait your Order is cheak<br>";
    setTimeout(() => {
      if (category === "English" || category === "Urdu") {
        let successMessage = `✅ Your ${category} Book is ready!<br>`;
        resolve(successMessage); // ✅ Resolve with a message
      } else {
        let errorMessage = "❌ Sorry, we don't have that Book.<br>";
        reject(errorMessage); // ✅ Reject with a message
      }
    }, 4000);
  });
}
Book_order("Urdu")
  .then((message) => {
    order.innerHTML += message + "<br>";
  })
  .catch((error) => {
    order.innerHTML += error + "<br>";
  });

// chaning in promises

function functionOne(number) {
  return new Promise((resolve, reject) => {
    order.innerHTML += "Fetching the Data One<br>";
    setTimeout(() => {
      if (number === 1) {
        let successMessage = "Number is 1";
        resolve(successMessage);
      } else {
        let errormsg = "Number is not 1";
        reject(errormsg);
      }
    }, 5000);
  });
}
function functionTwo(number) {
  return new Promise((resolve, reject) => {
    order.innerHTML += "Fetching the Data Two<br>";
    setTimeout(() => {
      if (number === 2) {
        let successMessage = "Number is 2";
        resolve(successMessage);
      } else {
        let errormsg = "Number is not 2";
        reject(errormsg);
      }
    }, 5000);
  });
}

functionOne(1)
  .then((message) => {
    order.innerHTML += message + "<br>";
    let fun2 = functionTwo(2);
    fun2.then((message) => {
      order.innerHTML += message + "<br>";
    });
  })
  .catch((error) => {
    order.innerHTML += error + "<br>";
  });
