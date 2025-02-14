function print(msg) {
    document.getElementById("coockiesID").innerHTML += msg + "<br>";
}

// auto delete when browser close

document.cookie = "familymember=Muneeb"
console.log(document.cookie)

// set coustom delete

document.cookie="Tournament=night;expires=fri,16 feb 2025 12:00:00 UTC;"
console.log(document.cookie)

// set path for all file 

document.cookie="shift=morning;expires=fri,16 feb 2025 12:00:00 UTC;path=/"
print(document.cookie)

// set pah for select file 

document.cookie="middel=evening;expires=fri,16 feb 2025 12:00:00 UTC;path=./index.html"


