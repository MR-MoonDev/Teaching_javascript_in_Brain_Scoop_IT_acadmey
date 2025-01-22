// break
for(let i = 1; i <= 10 ; i++){
    if(i == 3){
        document.getElementById("control_statements").innerHTML +=(i)
       break
    }
    document.getElementById("control_statements").innerHTML +=(i)

}
document.getElementById("control_statements").innerHTML +=("</br>")

//continue

for(let i = 1; i <= 10 ; i++){
    if(i == 3){
        document.getElementById("control_statements").innerHTML +=(i)
       continue
    }
    document.getElementById("control_statements").innerHTML +=(i)

}