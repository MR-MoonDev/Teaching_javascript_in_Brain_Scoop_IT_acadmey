for (let i = 1; i <= 3; i++) {
    document.getElementById("loop").innerHTML += (`for loop answer = ${i}</br>`)
}

let i = 1
while(i <= 3){
    document.getElementById("loop").innerHTML += (` while ans is ${i}</br>`)
       i++;
}

 
let j = 1;
do{
    document.getElementById("loop").innerHTML += (` do while answer = ${j}</br>`)
    j++
}while(j <= 3)


    