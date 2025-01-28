const object_name = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

document.getElementById("object").innerHTML += object_name.key1 + "<br>";
document.getElementById("object").innerHTML +=Object.values(object_name) + "<br>";
document.getElementById("object").innerHTML +=Object.keys(object_name) + "<br>";
document.getElementById("object").innerHTML +=Object.entries(object_name) + "<br>";

const fun_in_Object = {
  key1: "funtion in Object value1 ",
  key2: "funtion in Object value2 ",
  key3: function () {
    return (document.getElementById("fun_in_object").innerHTML +=
      this.key1 + this.key2 +  "<br>");
  },
};

fun_in_Object.key3();
fun_in_Object.key3();
fun_in_Object.key3();
fun_in_Object.key3();
document.getElementById("fun_in_object").innerHTML += fun_in_Object.key2 + "<br>";  

const array_in_Object = {
    key1: "array in Object value1 ",
    key2: "array in Object value2 ",
    key3: ["array1", "array2", "array3"],
}
document.getElementById("array_in_object").innerHTML += array_in_Object.key3[0] + "<br>";
document.getElementById("array_in_object").innerHTML += array_in_Object.key3 + "<br>";
