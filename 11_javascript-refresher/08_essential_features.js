// Array with map
let hobbies = ["Drawing", "Gaming", "Coding"];
hobbies.map(h => console.log(h));

// Destructuring
let student = { name: "Jay", age: 21 };
let { name, age } = student;
console.log(name, age);

// Spread operator
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
