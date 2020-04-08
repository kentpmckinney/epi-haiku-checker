/* eslint-disable no-console */
import './styles.css';
import $ from 'jquery';
import './haiku';

$(document).ready(function() {});

let maybeHaiku = `mi gato es lindo
y mi otro gato es guapo
y mi pero es gordo.`;

checkLines(maybeHaiku);

// const changeState = (prop) => {
// 	return (value) => {
// 		return (state) => ({
// 			...state,
// 			[prop]: (state[prop] || 0) + value
// 		});
// 	};
// };

// const blueFood = changeState('soil')(5);
// const greenFood = changeState('soil')(10);
// const yuckyFood = changeState('soil')(-5);

// const storeState = () => {
// 	let currentState = {};
// 	return (stateChangeFunction) => {
// 		const newState = stateChangeFunction(currentState);
// 		currentState = { ...newState };
// 		return newState;
// 	};
// };

// const stateChanger = storeState();

// practice
// const outer = () => {
// 	let state = 0;
// 	return () => {
// 		state++;
// 		return state;
// 	};
// };

// const outer1 = outer();
// console.log(outer1());
// console.log(outer1());
// console.log(outer1());
// console.log(outer1());

// console.log(outer());
// console.log(outer());
// console.log(outer());
// console.log(outer());

/* Kent's coin counter */
// console.log('coin counter w/ recursion');
// const counter = (amount, coins = {}) => {
// 	let newAmount = amount;
// 	if (amount < 0.05) {
// 		let pennies = Math.round(amount / 0.01);
// 		coins.pennies = pennies;
// 	} else if (amount / 0.25 > 1) {
// 		let quarters = Math.floor(amount / 0.25);
// 		coins.quarters = quarters;
// 		newAmount -= quarters * 0.25;
// 		counter(newAmount, coins);
// 	} else if (amount / 0.1 > 1) {
// 		let dimes = Math.floor(amount / 0.1);
// 		coins.dimes = dimes;
// 		newAmount -= dimes * 0.1;
// 		counter(newAmount, coins);
// 	} else if (amount / 0.05 > 1) {
// 		let nickels = Math.floor(amount / 0.05);
// 		coins.nickels = nickels;
// 		newAmount -= nickels * 0.05;
// 		counter(newAmount, coins);
// 	}
// 	return coins;
// };
// console.log(`result: ${counter(16.99)}`);

/* Kent's roman numeral generator */
// console.log('coin counter w/ closure');
// function numCoins(coinFaceValue) {
// 	return (amount) => {
// 		return Math.round(Math.floor(amount / coinFaceValue));
// 	};
// }
// const quarters = numCoins('.25');
// console.log(`result (quarters): ${quarters(1.0)}`);
// const dimes = numCoins('.10');
// console.log(`result (dimes): ${dimes(0.5)}`);
// const nickels = numCoins('.05');
// console.log(`result (nickels): ${nickels(0.25)}`);
// const pennies = numCoins('.01');
// console.log(`result (pennies): ${pennies(0.07)}`);
// console.log('roman numeral w/ recursion');
// const roman = (output, input) => {
// 	console.log(input);
// 	console.log(output);
// 	output.replace();
// 	if (input <= 0) return output;
// 	else {
// 		if (input >= 1000) {
// 			roman(output + 'M', input - 1000);
// 		} else if (input >= 500) {
// 			roman(output + 'D', input - 500);
// 		} else if (input >= 100) {
// 			roman(output + 'C', input - 100);
// 		} else if (input >= 50) {
// 			roman(output + 'L', input - 50);
// 		} else if (input >= 10) {
// 			roman(output + 'X', input - 10);
// 		} else if (input >= 5) {
// 			roman(output + 'V', input - 5);
// 		} else if (input >= 1) {
// 			roman(output + 'I', input - 1);
// 		}
// 	}
// };
// console.log(`result: ${roman('', 1952)}`);
// console.log('roman numeral w/ closure');
// console.log('prime sift w/ recursion');
// const prime = (n, list) => {
// 	console.log(n);
// 	console.log(list);
// 	if (!list) {
// 		list = new Array();
// 		for (let i = 2; i <= n; i++) {
// 			list.push(i);
// 		}
// 	}
// 	if (n < 2) return list;
// 	for (let i = 0; i < list.length; i++) {
// 		if (list[i] % n === 0) delete list[i];
// 	}
// 	prime(n - 1, list);
// };
// const result = prime(100);
// console.log(`result: ${result}`);
// const test = (t) => {
// 	return t;
// };
// console.log(test(3));
//     You may have solved this problem in C# or Ruby. This time, your goal is to solve it using recursion!
// Given a number, write a method that returns all of the prime numbers less than that number.
// This is a tricky problem and you should use the Sieve of Eratosthenes to solve it. Here's how the Sieve of Eratosthenes works to find a number up to a given number:
//     Create a list of numbers from 2 through n: 2, 3, 4, ..., number.
//     Initially, let prime equal 2, the first prime number.
//     Starting from prime, remove all multiples of prime from the list.
//     Increment prime by 1.
//     When you reach number, all the remaining numbers in the list are primes.
