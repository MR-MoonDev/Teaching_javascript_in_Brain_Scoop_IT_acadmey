// 1. AND (&&)
document.getElementById("logical").innerHTML+=("AND"+"</br></br></br>") 

document.getElementById("logical").innerHTML+=("1 "+( true && true) +'</br>') 
document.getElementById("logical").innerHTML+=("2 "+(true && false) +'</br>')
document.getElementById("logical").innerHTML+=("3 "+(false && true) +'</br>')
document.getElementById("logical").innerHTML+=("4 "+(false && false) +'</br></br>')


// 2. OR (||)
document.getElementById("logical").innerHTML+=("OR"+"</br></br></br>") 
document.getElementById("logical").innerHTML+=("5 "+(true || true)+'</br>')
document.getElementById("logical").innerHTML+=("6 "+(true || false)+'</br>')
document.getElementById("logical").innerHTML+=("7 "+(false || true)+'</br>')
document.getElementById("logical").innerHTML+=("8 "+(false || false)+'</br></br>')

// 3. NOT (!)
document.getElementById("logical").innerHTML+=("Not"+"</br></br>") 

document.getElementById("logical").innerHTML+=("9 "+!true+"</br>");
document.getElementById("logical").innerHTML+=("10 "+!false+"</br>");
