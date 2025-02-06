// call back in Asyncronous

function task1(callback) {
  document.getElementById("callback_Id").innerHTML = "Task One Done<br>"
  setTimeout(callback, 2000);
}

function task2() {
  document.getElementById("callback_Id").innerHTML += "Task Two Done<br>"
}

task1(task2)

// call back hell


function task3(callback) {
  setTimeout(() => {
  document.getElementById("callback_Id").innerHTML += "Task 3 Done<br>";
      callback();
  }, 5000);
}

function task4(callback) {
  document.getElementById("callback_Id").innerHTML += "Task 4 Done<br>";
  setTimeout(() => {
      callback();
  }, 5000);
}

function task5() {
  document.getElementById("callback_Id").innerHTML += "Task 5 Done<br>";
}

task3(()=>{
  task4(()=>{
    task5()
  })
})



//  Promises 

let mypromise = new Promise((resolve, reject) => {
  document.getElementById("callback_Id").innerHTML += "Promise initialize<br>"

  setTimeout(() => {
    let promise = true;
    if (promise) {
      resolve("promise Successful<br>")
    } else {
      reject("promise Rejection<br>")
    }
  }, 3000)
})

mypromise.then(result => {
  document.getElementById("callback_Id").innerHTML += result + '<br>';
})
  .catch(error => {
    document.getElementById("callback_Id").innerHTML += error + '<br>';
  });

// Chaining Promises

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Step 1: Data Fetched");
  }, 2000);
});

myPromise
  .then(step1 => {
    document.getElementById("result").innerHTML += step1+"<br>";
    return new Promise(resolve => {
      setTimeout(() => resolve("Step 2: Data Processed"), 2000);
    });
  })
  .then(step2 => {
    document.getElementById("result").innerHTML += step2+"<br>";
    return new Promise(resolve => {
      setTimeout(() => resolve("Step 3: Data Saved"), 2000);
    });
  })
  .then(step3 => {
    document.getElementById("result").innerHTML += step3+"<br>";
  })
  .catch(error => {
    document.getElementById("result").innerHTML += error+"<br>";
  });


  // asyn await

  function delayMessage(message, time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(message), 5000);
    });
}

// Async function
async function performTasks() {
    const result1 = await delayMessage("Asyn  Task 1: Data Fetched", 2000);
    document.getElementById("asynID").innerHTML = result1;
    
    const result2 = await delayMessage("Asyn  Task 2: Data Processed", 2000);
    document.getElementById("asynID").innerHTML += "<br>" + result2;
    
    const result3 = await delayMessage("Asyn  Task 3: Data Saved", 2000);
    document.getElementById("asynID").innerHTML += "<br>" + result3;
}

// Call the async function
performTasks();Asyn  