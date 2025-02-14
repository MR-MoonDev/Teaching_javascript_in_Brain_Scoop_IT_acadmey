import { export_data } from "./Topic33_Module_Export.js";
import import_fun from "./Topic33_Module_Export.js";
function print(msg){
   document.getElementById("moduleID").innerHTML += msg
}
print(export_data)
print(import_fun())
