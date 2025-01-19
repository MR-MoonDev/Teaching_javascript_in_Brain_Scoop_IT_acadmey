// 1. AND (&&)

document.getElementById("and_true_true").innerHTML=(true && true) // T
document.getElementById("and_true_false").innerHTML=(true && false)//F
document.getElementById("and_false_true").innerHTML=(false && true)//F
document.getElementById("and_false_false").innerHTML=(false && false)//F

// 2. OR (||)

document.getElementById("or_true_true").innerHTML=(true || true)//t
document.getElementById("or_true_false").innerHTML=(true || false)//t
document.getElementById("or_false_true").innerHTML=(false || true)//t
document.getElementById("or_false_false").innerHTML=(false || false)//f

// 3. NOT (!)

document.getElementById("not_true").innerHTML=(!true);//f
document.getElementById("not_false").innerHTML=(!false);//t
