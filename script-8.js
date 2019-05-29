//import everything from a file (because importing everything the capitalizeString is optional and is an object that could be named anything)
import * as capitalizeString from "./script-7";

capitalizeString("hello");
//getting same error that did in the script 6 file.

//create an export fallback with export default, often when only want to export one thing from a file
export default function subtract(x,y) {return x - y;}