let arr = ["first", "second", "third"];

// Adding elements to the end of the array
arr.push("fourth");
console.log(arr); // Output: ["first", "second", "third", "fourth"]

// Adding elements to the beginning of the array
arr.pop("first");
console.log(arr); // Output: ["second", "third", "fourth"]  

arr.unshift("zero");
console.log(arr); // Output: ["zero", "second", "third", "fourth"]

arr.shift();
console.log(arr); // Output: ["second", "third", "fourth"]

arr.splice(1,1,"newSecond");
console.log(arr); // Output: ["second", "newSecond", "fourth"]

arr.splice(1,0,"insertedSecond");
console.log(arr); // Output: ["second", "insertedSecond", "newSecond", "fourth"]

