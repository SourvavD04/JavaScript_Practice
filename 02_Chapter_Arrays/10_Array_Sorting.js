let num = [10,4,23,45,6,78];

// Sorting the array in ascending order
num.sort();
console.log(num); // Output: [4, 6, 10, 23, 45, 78]

// Sorting the array in descending order
num.sort((a, b) => b - a);
console.log(num); // Output: [78, 45, 23, 10, 6, 4] 

// Sorting an array of strings in alphabetical order
let fruits = ['banana', 'apple', 'cherry', 'date'];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// Sorting an array of strings in reverse alphabetical order
fruits.sort().reverse();
console.log(fruits); // Output: ['date', 'cherry', 'banana', 'apple']

fruits.sort((a,b) => a.localeCompare(b));
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']