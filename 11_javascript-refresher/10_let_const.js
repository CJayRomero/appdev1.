// Using var
var name = "Jay";
var age = 21;
age = 20; // can reassign
console.log("var:", name, age);

// Using let
let course = "ACT";
course = "BSIT"; // allowed
console.log("let:", course);

// Using const
const hobby = "Drawing";
// hobby = "Gaming"; // ❌ TypeError: Assignment to constant variable
console.log("const:", hobby);

// Observe:
// var → can be redeclared & reassigned
// let → can be reassigned, not redeclared in the same scope
// const → cannot be reassigned or redeclared
