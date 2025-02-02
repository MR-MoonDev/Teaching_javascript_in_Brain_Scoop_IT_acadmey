let sentence = " my name is Muneeb ";
var hold_sentence = document.getElementById("string_method");

hold_sentence.innerHTML = sentence+"<br>";

// String length
hold_sentence.innerHTML += sentence.length+"<br>";

// String UpperCase
hold_sentence.innerHTML += sentence.toUpperCase()+"<br>";

// String LowerCase
hold_sentence.innerHTML += sentence.toLowerCase()+"<br>";

// String IndexOf   
hold_sentence.innerHTML += sentence.indexOf("M")+"<br>";

// String lastIndexOf
hold_sentence.innerHTML += sentence.lastIndexOf("b")+"<br>";

// String charAt
hold_sentence.innerHTML += sentence.charAt(3)+"<br>";

// String replace
hold_sentence.innerHTML += sentence.replace("Muneeb","Ali")+"<br>";

// String replaceAll
hold_sentence.innerHTML += sentence.replaceAll("Muneeb","Ali")+"<br>";

// String slice
hold_sentence.innerHTML += sentence.slice(10,19)+"<br>";

// String split
hold_sentence.innerHTML += sentence.split(" ")+"<br>";

// String substring
hold_sentence.innerHTML += sentence.substring(11,17)+"<br>";

// String trim
console.log("Trimmed:", sentence.trim()); 

// String trimStart() 
console.log("Trim Start:", sentence.trimStart()); 

// String trimEnd() 
console.log("Trim End:", sentence.trimEnd()); 

// String includes
hold_sentence.innerHTML += sentence.includes("Muneeb")+"<br>";

// String startsWith
hold_sentence.innerHTML += sentence.startsWith("my")+"<br>";

// String endsWith
hold_sentence.innerHTML += sentence.endsWith("Muneeb")+"<br>";

// String repeat
hold_sentence.innerHTML += sentence.repeat(2)+"<br>";

// String padStart
hold_sentence.innerHTML += sentence.padStart(20,"*")+"<br>";

// String padEnd
hold_sentence.innerHTML += sentence.padEnd(20,"*")+"<br>";

// String Search
hold_sentence.innerHTML += sentence.search("Muneeb")+"<br>";    

// String LocaleCompare
var str1 = "Hello";
var str2 = "hello";
var n = str1.localeCompare(str2);
hold_sentence.innerHTML += n+"<br>";

// String toString

var num = 10
hold_sentence.innerHTML += num+typeof num+"<br>";
var str = num.toString();
hold_sentence.innerHTML += str+typeof str+"<br>";


// String valueOf
var strObj = new String("Hello");  // String Object
console.log(typeof strObj);  // "object"
console.log(typeof strObj.valueOf());  // "string"
