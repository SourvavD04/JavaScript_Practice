let testResults = ["pass", "fail", "pass", "skip"];
let newArray = new Array(3);
newArray[0] = "first";
newArray[1] = "second";
newArray[2] = "third";
console.log(newArray);

// Array literal (preferred)

let browsers = ["Chrome", "Firefox", "Safari"];

// Array constructor

let scores = new Array(3);        // creates [empty x 3]

let scores2 = new Array(1, 2, 3); // creates [1, 2, 3]

let numbers = new Array(100, 200, 300, 400); // 0-3: 4 items

console.log(numbers);

// Array.of() always builds from the given values

let test = Array.of(10, 20, 30, 40, 50); // 0-4: 5 items

console.log(test);

console.log(test[0]); // 10

// Array.from() builds an array from something iterable

let chars = Array.from("hello"); // ["h", "e", "l", "l", "o"]

console.log(chars);
