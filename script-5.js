//use getters and setters to control access to an object
//"this" insures that the variable is only accessible within that class.
//When you have a _before the variable that generally means it's not meant to be accessible outside of that scope/class (it's a private variable).
class Book {
	constructor(author) {
		this._author = author;
	}
	// getter
	get writer(){
		return this._author;
	}
	// setter
	set writer(updatedAuthor){
		this._author = updatedAuthor;
	}
}
//passing info in fahrenheit, storing data in celsius
function makeClass() {
	class Thermostat {
		constructor(temp) {
			this._temp = 5/0 * (temp -32);
		}
		get temperature() {
			return this._temp;
		}
		set temperature(updatedTemp) {
			this._temp = updatedTemp;
		}
	}
	return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp); //sb 26

