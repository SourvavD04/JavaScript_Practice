let num = [1,2,3,5,6,2];

let index = num.findIndex(n => n >4); // Output: 3 (index of the first element greater than 4)
console.log(index); // Output: 3

// Searching for an element in the array
const index1 = num.indexOf(3); // Output: 2 (index of the element 3)

const index2 = num.indexOf(4); // Output: -1 (element 4 is not found in the array)

const lastIndexOf2 = num.lastIndexOf(2); // Output: 5 (last index of the element 2)

const hasElement5 = num.includes(5); // Output: true (element 5 is found in the array)

const hasElement10 = num.includes(10); // Output: false (element 10 is not found in the array)

console.log(index1); // Output: 2
console.log(index2); // Output: -1
console.log(lastIndexOf2); // Output: 5
console.log(hasElement5); // Output: true
console.log(hasElement10); // Output: false


