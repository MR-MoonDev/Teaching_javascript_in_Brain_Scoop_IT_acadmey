// class
class_ID = document.getElementById("class_ID");

class class_name {
  constructor() {
    class_ID.innerHTML += "This is a constructor" + "<br><br>";
  }

  property1 = (class_ID.innerHTML += "value1<br><br>");
  property2 = (class_ID.innerHTML += "value2<br><br>");
  method_name() {
    class_ID.innerHTML += "This is a Method<br><br>";
  }
  method_with_para(para) {
    class_ID.innerHTML += "This is a " + para + "<br><br>";
  }
}

let variable = new class_name();
variable.property1;
variable.property2;
variable.method_name();
variable.method_with_para("argument");

//  Inheritance

class parent {
  parent_proterty1 = "parent value 1";
  parent_proterty2 = "parent value 2";

  constructor() {
    class_ID.innerHTML += "This is a parent class constructor  <br><br>";
  }
  parent_method() {
    class_ID.innerHTML += "This is a parent class method <br><br>";
  }
 
}

class child extends parent {
  constructor() {
    super();
    class_ID.innerHTML += "This is a child class constructor <br><br>";
  }
  child_method(){
    class_ID.innerHTML += "This is a child class method <br><br>";
  }
 
}

let child_class = new child();
child_class.parent_method();
class_ID.innerHTML += child_class.parent_proterty2+" <br><br>";

child_class.child_method();


// Method Overriding

class One{
  same_method(){
   class_ID.innerHTML += "This is same method  from class One <br><br>"; 
  }
}

class two extends One{
  constructor(){
    super();
  }
  same_method(){
    class_ID.innerHTML += "This is same method  from class Two <br><br>"; 
   }
}

let method_over_riding = new two();
method_over_riding.same_method(); 


// method overloaded can not support in js

class overloaded{
  method_overloaded(){
    class_ID.innerHTML += "This overloaded method have NO arguments <br><br>"; 
    
  }
  method_overloaded(para1){
    class_ID.innerHTML += "This overloaded method have ONE arguments <br><br>"; 
    
  }
  method_overloaded(para1,para2){
    class_ID.innerHTML += "This overloaded method have TWO arguments <br><br>"; 
    
  }
  method_overloaded(para1,para2,para3){
    class_ID.innerHTML += "This overloaded method have THREE arguments <br><br>";  
  }
}

m_overloaded = new overloaded()
m_overloaded.method_overloaded()
