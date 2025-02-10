let proto_variable = document.getElementById("prototype");

const  age={
    print_msg(){
    return `your age is 18+`
}
}

const names={
    name1:"Muneeb ",
    print_msg(){
        return `your age is 10`
    }
}

Object.setPrototypeOf(names,age)
// names.print_msg()

console.log(names.name1+names.print_msg()) 