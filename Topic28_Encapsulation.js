variable = document.getElementById("Encapsulation")

class psw{
    #pw;

    constructor(pw){
         this.#pw = pw;
    }

    getpw(){
        return this.#pw
    }
}

const pw = new psw(22)
variable.innerHTML += pw.getpw();
