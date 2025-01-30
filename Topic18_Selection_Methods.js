//id selection
document.getElementById("id_selection").innerHTML=("This text in JS");

// only index elements with the class name "class_selection" will be changed

document.getElementsByClassName("class_selection")[0].innerHTML=("This text  class selection in JS");
document.getElementsByClassName("class_selection")[1].innerHTML=("This text class selection in JS");

// all elements with the class name "class_selection" will be changed

let elements = document.getElementsByClassName("class_selection");
for(i = 0; i < elements.length; i++){
   elements[i].innerHTML=("This text class selection in JS");
}

