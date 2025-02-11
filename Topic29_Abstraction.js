function print(text) {
    document.getElementById("abstractionID").innerHTML += text + "<br>";
}

class Password { 
    #password;
    
    constructor(password) {
        this.#password = password;
    }
    
    getPassword() {
        return print("Access Denied!"); 
    }

    setPassword(newPassword) {
        if (newPassword.length >= 6) {
            this.#password = newPassword;
            print("Password updated successfully.");
        } else {
            print("Password must be at least 6 characters long.");
        }
    }
}

let Password1 = new Password("mypassword");

Password1.getPassword();  
Password1.setPassword("1234");  
Password1.setPassword("newpass123");  
