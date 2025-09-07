// Object destructuring
const person = {
  name: "Jay",
  age: 21
};
const { name, age } = person;
console.log(name, age);

// Array destructuring
const hobbies = ["drawing", "gaming"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// Destructuring in function parameters
function printName({ name }) {
  console.log(name);
}
printName(person);
