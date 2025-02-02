// new Date()	
// getFullYear()	
// getMonth()	
// getDate()	
// getDay()	


// new date
let new_date = new Date();
holder = document.getElementById("date_method");
holder.innerHTML += (new_date + "<br>");

//getfull year
holder.innerHTML += (new_date.getFullYear() + "<br>")

// getMonth
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
holder.innerHTML += (monthNames[new_date.getMonth()]+"<br>")

//get Date
let getdate = new Date
holder.innerHTML += (getdate.getDate()+"<br>")

//getDay
//week (0-based: Sunday = 0, Monday = 1, ..., Saturday = 6).
let daysname = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
holder.innerHTML += (daysname[new_date.getDay()]+"<br><br>")


holder.innerHTML += (getdate.getDate()+"-"+monthNames[new_date.getMonth()]+"-"+new_date.getFullYear())
