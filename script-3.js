//destructuring ass to pass an object as a functions parameter
const stats = {
	max: 56.78,
	standard_deviation: 4.34,
	median: 34.54,
	mode: 23.87,
	min: -0.75,
	average: 35.85
};
//instead of this commented out code
// const half = (function() {
// //
// // 	return function half(stats) {
// // 		return (stats.max + stats.min) / 2.0;
// // 	};
//this destructuring, commonly used for ajax and api calls, allowing you to break down more simply what you actually want to work with. 
	const half = (function() {

		return function half({ max, min }) {
			return (max + min) / 2.0;
		};
})();
console.log(stats);
console.log(half(stats));
