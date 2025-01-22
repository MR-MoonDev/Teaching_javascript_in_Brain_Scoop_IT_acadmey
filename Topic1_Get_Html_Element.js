document.getElementById('get_element').innerHTML = "Muneeb";
// Adding names and links to 'same_element'
document.getElementById('same_element').innerHTML = "Aayan </br>";
document.getElementById('same_element').innerHTML += `<a href="https://web.whatsapp.com/" target="_blank">WhatsApp</a></br>`;

// Setting image source
document.getElementById("img_id").src = "../images/stone.jpg";

// Repeating images in a container
document.getElementById("img_container").innerHTML = `
    <img src="../images/Birds.webp" alt="Stone Image" width="250px" height="300px"/>
    <img src="../images/Birds.webp" alt="Stone Image" width="250px" height="300px"/>
    <img src="../images/stone.jpg" alt="Stone Image" width="250px" height="300px"/>
    `;

// Adding a paragraph
let paragraph = "This is a paragraph.";
document.getElementById('big_para').innerHTML = paragraph;
