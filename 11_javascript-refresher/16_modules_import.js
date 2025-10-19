// Import default + named export
import greet, { info } from "./15_modules_export.js";

console.log(greet(info.name));
console.log("Info:", info);
