//difference between var and let, you can only declare variable with let once.

let catName = "Quincy";
let quote;

//the second declaration here will cause an error
// let catName = "Beau";
//this prevents it
catName = "Beau";

function catTalk() {
	//catches common coding errors
	"use strict";

	catName = "Oliver";
	quote = catName + " says Meow!";

}
catTalk();


//var vs let scope
//let can be better for insuring that the variable is defined only in the area that you want it defined in. Consider following.
function checkScope() {
	"use strict";
	var i = "function scope";
	if (true) {
		i = "block scope";
		console.log("Block scope i is: ", i);
	}
	console.log("Function scope i is: ", i);
	return i;
}

checkScope();

//let alternative, look at console.
// function checkScope() {
// 	"use strict";
// 	let i = "function scope";
// 	if (true) {
// 		let i = "block scope";
// 		console.log("Block scope i is: ", i);
// 	}
// 	console.log("Function scope i is: ", i);
// 	return i;
// }
//
// checkScope();

//see what happens in both the var function and let function when you comment out the first i variable declaration

//const is read only, you cannot reassign it (with some caveats for arrays and objects). Common to use ALLCAPS for title of const variables.
//note how you can change a const array or object by targeting the specific indexes, but not by trying to switch the whole variable in the commented out bit

const s = [5, 7, 2];
function editInPlace() {
	"use strict";

	//s = [2, 5, 7];
	s[0] = 2;
	s[1] = 5;
	s[2] = 7;

}
editInPlace();

console.log(s);


//freeze constant from being changed:
function freezeObj() {
	"use strict";
	const MATH_CONSTANTS = {
		PI: 3.14
	};

	Object.freeze(MATH_CONSTANTS);

	try {
		MATH_CONSTANTS.PI = 99;
	} catch( ex ) {
		console.log(ex);
	}
	return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);
//cases when you might use var over let and const.