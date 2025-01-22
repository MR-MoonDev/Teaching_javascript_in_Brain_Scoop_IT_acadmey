let age = 18;

if (age >= 18) {
    document.getElementById("if_else").innerHTML=("You are eligible to vote."+"</br>")
} else {
    document.getElementById("if_else").innerHTML=("Not You are eligible to vote."+"</br>")
}

let name = "Muneeb";

if (name == "Raza") {
    document.getElementById("if_else").innerHTML+=("Muneeb statemnt one."+"</br>")

} else if (name == "Areeb") {
    document.getElementById("if_else").innerHTML+=("Muneeb statemnt Two."+"</br>")

} else if (name == "Ayyan") {
    document.getElementById("if_else").innerHTML+=("Muneeb statemnt Three."+"</br>")

} else {
    document.getElementById("if_else").innerHTML+=("There no Muneeb."+"</br>")

}
