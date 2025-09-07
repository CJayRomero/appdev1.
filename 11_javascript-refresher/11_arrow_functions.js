// Traditional → Arrow functions

// One parameter
const greet = (name) => "Hello, " + name;
console.log(greet("Jay"));

// One parameter with implicit return
const square = n => n * n;
console.log("Square:", square(5));

// No parameters
const sayHi = () => console.log("Hi!");
sayHi();
