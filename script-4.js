//template literals makes making complex strings simpler
const person = {
	name: "Zodiac Hasbro",
	age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);




const result = {
	success: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
	const resultDisplayArray = [];
	for (let i = 0; i < arr.length; i++) {
		resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
	}

	return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);

//OBJECT LITERALS
//old way of doing this object
// const createPerson = (name, age, gender) => {
//
// 	return {
// 		name: name,
// 		age: age,
// 		gender: gender
// 	};
//
// };

//ES6 way
const createPerson = (name, age, gender) => ({ name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male"));

//WRITE CONCISE DECLARATIVE FUNCTIONS WITH ES6
//old way
// const bicycle = {
// 	gear: 2,
// 	setGear: function(newGear) {
// 		"use strict";
// 		this.gear = newGear;
// 	}
// };

const bicycle = {
	gear: 2,
	setGear(newGear) {
		"use strict";
		this.gear = newGear;
	}
};

bicycle.setGear(3);
console.log(bicycle.gear);

//USE CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION (CREATE AN OBJECT)
//old way
//constructor function
// var SpaceShuttle = function(targetPlanet){
// 	this.targetPlanet = targetPlanet;
// }
// //create new object
// var zeus = new SpaceShuttle('Jupiter');

//ES6 way with class
class SpaceShuttle {
	constructor (targetPlanet) {
		this.targetPlanet = targetPlanet;
	}
}
//create new object
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)

//another example
function makeClass() {
	class Vegetable {
		constructor(name) {
			this.name = name;
		}
	}
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);