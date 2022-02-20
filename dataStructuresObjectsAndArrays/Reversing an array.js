/*
Arrays have a reverse method that changes the array by inverting the order in which
 its elements appear. For this exercise, write two functions, reverseArray and 
reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces
 a new array that has the same elements in the inverse order. The second, 
reverseArrayInPlace, does what the reverse method does: it modifies the array given 
as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous 
chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

function reverseArray(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArrayInPlace(array) {
  for (let h = 0; h < Math.floor(array.length / 2); h++) {
    let a = array[h];
    array[h] = array[array.length - 1 - h];
    array[array.length - 1 - h] = a;
  }
}

let startNewArr = new Date().getTime();
console.log(
  reverseArray([
    "A",
    "B",
    "C",
    "W",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "V",
    "C",
  ])
);
let endNewArr = new Date().getTime();
let timeNewArr = endNewArr - startNewArr;
console.log(`time for executing reverseArray ${timeNewArr} ms`);
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5, 6, 7, 9, 12, 14, 23, 23, 4, 656, 65];
let startInPlaceArr = new Date().getTime();
reverseArrayInPlace(arrayValue);
let endInPlaceArr = new Date().getTime();
let timeInPlaceArr = endInPlaceArr - startInPlaceArr;
console.log(`time for executing reverseArrayInPlace ${timeInPlaceArr} ms`);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
