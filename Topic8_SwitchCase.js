let day = 3;

switch (day) {
    case 1:
        document.getElementById("day").innerHTML=("Monday");
        break;
    case 2:
        document.getElementById("day").innerHTML=("Tuesday");
        break;
    case 3:
        document.getElementById("day").innerHTML=("Wednesday");
        break;
    case 4:
        document.getElementById("day").innerHTML=("Thursday");
        break;
    case 5:
        document.getElementById("day").innerHTML=("Friday");
        break;
    default:
        document.getElementById("day").innerHTML=("Invalid day");
}
