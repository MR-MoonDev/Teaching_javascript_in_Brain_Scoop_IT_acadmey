function print(msg){
  document.getElementById("localstorageID").innerHTML += msg
}

let key = prompt("Enter your name");
let value = prompt("Enter your age");
localStorage.setItem(key,value)

let getitem = "This is your " + localStorage.getItem(key) + " and your age is " + localStorage.getItem(key);
// print(getitem);

let remove = prompt("remove item from local storage")

if (localStorage.getItem(remove)) {
    localStorage.removeItem(remove);
    // print("The item with key '" + remove + "' has been removed.");
  }

  if(localStorage.length == 3){
    localStorage.clear()
  }


  let updateKey = prompt("Enter the key you want to update (e.g., 'raza' or 'safia')");
if(localStorage.getItem(updateKey)){
    newprompt = prompt("update value"+updateKey);
    localStorage.setItem(updateKey,newprompt)
}

