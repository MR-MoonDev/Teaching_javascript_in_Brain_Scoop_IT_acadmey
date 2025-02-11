variable = document.getElementById("Encapsulation")

class psw{
    #pw;

    constructor(pw){
         this.#pw = pw;
    }

    getpw(){
      let  print_text  =  variable.innerHTML += this.#pw+"<br>";    
        return print_text
    }
    setpw(newpw){
         this.#pw =newpw;
    }   
}

const pw = new psw(22)
pw.getpw()
pw.getpw()
// update password
 pw.setpw(77)+"<br>";    
 pw.getpw()+"<br>";    






