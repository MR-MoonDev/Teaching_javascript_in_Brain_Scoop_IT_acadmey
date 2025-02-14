
function print(msg){
    document.getElementById("moduleID").innerHTML += msg
 }
export var export_data = "this data is export"


export default function import_fun(){
   print("This function is default export")
}