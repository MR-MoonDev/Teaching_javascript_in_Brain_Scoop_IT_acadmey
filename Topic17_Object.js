// Define an object with key-value pairs
const object_name = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  // Access and display the value of key1
  document.getElementById("object").innerHTML += object_name.key1 + "<br>";
  
  // Display all values of the object using Object.values()
  document.getElementById("object").innerHTML += Object.values(object_name) + "<br>";
  
  // Display all keys of the object using Object.keys()
  document.getElementById("object").innerHTML += Object.keys(object_name) + "<br>";
  
  // Display all key-value pairs of the object using Object.entries()
  document.getElementById("object").innerHTML += Object.entries(object_name) + "<br>";
  
  // Define an object with a function as one of its properties
  const fun_in_Object = {
    key1: "function in Object value1 ",
    key2: "function in Object value2 ",
    key3: function () {
      // Append the concatenated value of key1 and key2 to the HTML element with id 'fun_in_object'
      return (document.getElementById("fun_in_object").innerHTML +=
        this.key1 + this.key2 + "<br>");
    },
  };
  
  // Call the function key3 multiple times and display its output
  fun_in_Object.key3();
  fun_in_Object.key3();
  fun_in_Object.key3();
  fun_in_Object.key3();
  
  // Display the value of key2
  document.getElementById("fun_in_object").innerHTML += fun_in_Object.key2 + "<br>";
  
  // Define an object with an array as one of its properties
  const array_in_Object = {
    key1: "array in Object value1 ",
    key2: "array in Object value2 ",
    key3: ["array1", "array2", "array3"], // Array property
  };
  
  // Access and display the first element of the array
  document.getElementById("array_in_object").innerHTML += array_in_Object.key3[0] + "<br>";
  
  // Display all elements of the array (comma-separated by default)
  document.getElementById("array_in_object").innerHTML += array_in_Object.key3 + "<br>";
  