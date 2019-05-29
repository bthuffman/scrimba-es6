//using destructuring assignment, special syntax uniquely assigning values taken from an object to a variable
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

//old way of storing the variables
// var x = voxel.x; // x = 3.6
// var y = voxel.y; // y = 7.4
// var z = voxel.z; // z = 6.54

//simpler way is through this destructuring.
//copy the field of x and copy it into a, y to b, etc.
const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54

//using destructuring to gather the average temperature
const AVG_TEMPERATURES = {
	today: 77.5,
	tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
	"use strict";
	// // change code below this line
	// 	// const tempOfTomorrow = undefined; // change this line
	//so this is saying get the tomorrow field from the avgTemperatures object and assign it to the tempOfTomorrow variable
const { tomorrow : tempOfTomorrow } = avgTemperatures;
	// change code above this line
	return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79


//destructuring from nested objects.
const LOCAL_FORECAST = {
	today: { min: 72, max: 83 },
	tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
	"use strict";

	const { tomorrow : { max : maxOfTomorrow }} = forecast;

	return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); //sb 84.6

//destructuring values from arrays
//in arrays (unlike objects) you cannot specify, you have to go in order.
const[ , , , y] = [1, 2, 3, 4, 5, 6];
console.log(y);

//this destructuring switches the values
let f = 8, e = 6;
(() => {
	"use strict";
	[f,e] = [e,f]
})();
console.log(f);
console.log(e);

//use destruct assignment with rest operator to reassign array elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

	//return the list with the first two items removed
	//here the , are saying do nothing for the first element, nothing for the second and then make an arr for the rest
	const [ , , ...arr] = list;

	return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);