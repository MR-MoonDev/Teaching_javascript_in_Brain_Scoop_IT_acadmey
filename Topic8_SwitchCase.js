let day = 3;

switch (day) {
    case 1:
        document.getElementById("switch").innerHTML=("Monday");
        break;
    case 2:
        document.getElementById("switch").innerHTML=("Tuesday");
        break;
    case 3:
        document.getElementById("switch").innerHTML=("Wednesday");
        break;
    case 4:
        document.getElementById("switch").innerHTML=("Thursday");
        break;
    case 5:
        document.getElementById("switch").innerHTML=("Friday");
        break;
    default:
        document.getElementById("switch").innerHTML=("Invalid day");
}
