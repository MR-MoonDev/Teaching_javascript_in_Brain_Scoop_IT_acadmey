function print(msg){
    document.getElementById("sessionID").innerHTML += msg
  }

sessionStorage.setItem("username","Muneeb")  ;
let users = sessionStorage.getItem("username")
print(users)
sessionStorage.removeItem("username")
document.getElementById("sessionID").innerHTML = "";

sessionStorage.clear()
if(sessionStorage.getItem("username")){
    print("user exists")
}
else{
    print("do not exists")
}


window.onstorage=(e)=>{
  print("update")
  console.log(e)
}

