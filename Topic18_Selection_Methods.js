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

// select by tag name

let li = document.getElementsByTagName("li");

// selec all tag by tag name

for(i = 0 ; i < li.length; i++){
    li[i].innerHTML=("This text tag selection in JS");
}

// query selector

document.querySelector("a").innerHTML=("This text query Tag selector in JS"+'<br>');
document.querySelector("#anchor_id").innerHTML=("This text query iD selector in JS"+'<br>');
document.querySelector(".anchor_class").innerHTML=("This text query Class selector in JS"+'<br><br>');
document.querySelector("input[placeholder]").value = "This text query Attribute selector in JS";
