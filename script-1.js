//arrow functions (great for anonymous functions)
var magic = function() {
	return new Date();
};
//arrow function equivalent:
const magic1 = () => new Date();

//from normal
var myConcat = function(arr1, arr2) {
	return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
//to arrow
// since only returning the variable can get rid of the return statement and {}
//note const is more common with arrow functions
const myConcat1 = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat1([1, 2], [3, 4, 5]));

//arrow functions are a favorite for higher order functions (functions that take other functions as an arguments)
//Esp map, filter and reduce higher order functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
	//here be the arrow function, filter negatives out
	const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
	return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//default parameters occurs when no argument specified
//in this case is a value is passed in it will retain whatever was passed in, if not it will be set to one.
const increment = (function() {
	return function increment(number, value = 1) {
		return number + value;
	};
})();
console.log(increment(5, 2));
console.log(increment(5));

//using the rest operator Q.E.D. the three dots ...
//the ... passes the values into an array called args
const sum = (function() {
	return function sum(...args) {
		return args.reduce((a, b) => a + b, 0);
	};
})();
console.log(sum(1, 2, 3, 4));

//spread operator, the three dots again, but spreads out an existing array out into it's individual parts. Can only use it in an argument to a function or in an array literal
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
	arr2 = [...arr1];//this is the spread way of copy the array
	// arr2 = arr1; // this would copy the first array, but then the changing of the arr1[0] to potato would carry over to arr2 despite happening later
	arr1[0] = 'potato'
})();
console.log(arr2);