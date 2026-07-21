let numbers:number[] = [1,2,3,4,5,6,7];
let fruits:string[] = ["Apple", "Banana", "Orange", "Mango"];

/* console.log("Numbers Array: ", numbers);
console.log("Fruits Array: ", fruits);

// length is an attribute not a method, gives the amount of array elements
console.log(numbers.length);
console.log(fruits.length); */

// array.push(element1, ..., elementn);
// add one or multiple elements at the end of the array
/* numbers.push(8,9,10);
fruits.push("Pineapple", "Strawberry");

console.log("Numbers Array: ", numbers);
console.log("Fruits Array: ", fruits);
 */

// array.pop();
// removes one element from the end of the array
/* let lastElement = numbers.pop();
console.log(lastElement); */


// array.shift()
// removes the first elemnet from the array
/* let firstNumber = numbers.shift();
console.log(firstNumber); */

// array.unshift()
// add single/ multiple elements at the beginning of an array
/* numbers.unshift(1);
console.log(numbers); */

// array1.concat(array2, ..., arrayn)
// merges two or more arrays together
// This does not affect the original array
/* let modifiedArray: number[] = numbers.concat([8,9,10], [11, 12, 13, 14]);
console.log(modifiedArray); */

// array.slice(1, 3)
// Extract a section of an array
// 1  from index one element till index 3
/* let extractedArray: string[] = fruits.slice(1,3);
console.log(extractedArray);
 */


// array.splice(start, deletion count, adding elements)
// add/ remove single/ multiple elements from anywhere of the array

// deletion from the array
/* let removedElements = fruits.splice(1,2);
console.log(removedElements);
console.log(fruits); */

// adding to the array - add new elements from index 1
/* fruits.splice(1,0, "Kiwi", "Orange", "Pineapple");
console.log(fruits); */

// adding and deletion
/* fruits.splice(1,2,"Cherry", "Blueberry");
console.log(fruits); */

// array.indexOf(element)
// extracts the index of the element if it is not in the array retrn -1
/* console.log(fruits.indexOf("Orange")); // returns the index of Orange as 2
console.log(fruits.indexOf("Cherry")); // returns the index of Cherry as -1 as it is not in the array
console.log(fruits.indexOf("Orange",3)); // returns the index of Orange as -1, because the sarching starts from 3rd index which is further from the index of Orange
 */

// array.includes(element);
// checks whethr the element is in the array or not
/* console.log(fruits.includes("Orange")); // returns true as orange is in the array
console.log(fruits.includes("papaya")); // returns false as papaya is not in the array
console.log(fruits.includes("Orange", 3)); // returns false as Orange is in the array, but searching start from 3 */

// array.toString()
// convert the array format to string format
console.log(fruits);
console.log(fruits.toString());
