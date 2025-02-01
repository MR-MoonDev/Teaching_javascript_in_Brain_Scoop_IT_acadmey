document.getElementById("event_handle").addEventListener("click", function(){
    document.getElementById("add_text_event_handle").innerHTML = "Hello World!";
});

document.getElementById("textInput").addEventListener("keydown", function(event) {
    document.getElementById("add_text_event_handle").innerHTML = event.key;

  });

  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from reloading the page
    alert("Form Submitted!");
  });