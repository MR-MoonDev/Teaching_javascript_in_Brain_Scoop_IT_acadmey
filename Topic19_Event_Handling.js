// click event
document.getElementById("click_event").addEventListener("click", function(){
    document.getElementById("add_text_event_handle").innerHTML += "Click event here";
});

  // Double Click Event
  
  document.getElementById("dblClickBtn").addEventListener("dblclick", function() {
    document.getElementById("add_text_event_handle").innerHTML += "Double Click event here";
});

 // Mouseover Event
 document.getElementById("box").addEventListener("mouseover", function() {
   this.textContent = "Mouse Over Me!";
});

 // Mouseout Event
 document.getElementById("box").addEventListener("mouseout", function() {
  this.textContent = "Mouse Out Me!";
});

 // Change Event
document.getElementById("textInput").addEventListener("change", function() {
  document.getElementById("add_text_event_handle").textContent = this.value;
});

// input Event
document.getElementById("textInput").addEventListener("input", function() {
  document.getElementById("add_text_event_handle").textContent = this.value;
});

// Keydown Event (Triggers when a key is pressed)
document.getElementById("Triggers").addEventListener("keydown", function(event) {
  console.log("Key Pressed:", event.key);
  document.getElementById("Triggers_text").textContent = event.key;
});

// Keyup Event (Triggers when a key is released)
document.getElementById("Triggers").addEventListener("keyup", function(event) {
  console.log("Key Released:", event.key);
  document.getElementById("Triggers_text").textContent = event.key;
});


// Focus Event
document.getElementById("textInput").addEventListener("focus", function() {
  console.log("Input Field Focused");
});

// Blur Event
document.getElementById("textInput").addEventListener("blur", function() {
  console.log("Input Field Lost Focus");
});

  // Submit Event
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission
    alert("Form Submitted!");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked!");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked!");
});