const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Accessing elements in the array
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: cherry
console.log(fruits.length); // Output: 5
console.log(fruits[fruits.length - 1]); // Output: elderberry (last element)
console.log(fruits[5]); // Output: undefined (index out of bounds)
console.log(fruits.at(-1)); // Output: elderberry (last element using at() method)
console.log(fruits.at(-2)); // Output: date (second to last element using at() method)
console.log(fruits.at(-3)); // Output: cherry (third to last element using at() method)
console.log(fruits.at(-4)); // Output: banana (fourth to last element using at() method)
