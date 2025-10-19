// Spread with arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

// Spread with objects
const user = { name: "Jay", age: 21 };
const newUser = { ...user, course: "ACT" };
console.log(newUser);

// Rest operator in function
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));
