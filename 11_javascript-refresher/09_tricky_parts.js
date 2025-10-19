// == vs ===
console.log("5" == 5);   // true
console.log("5" === 5);  // false

// undefined vs null
let x;
let y = null;
console.log(x); // undefined
console.log(y); // null

// Regular vs Arrow function in object
let obj = {
    name: "Jay",
    regularFn: function() {
        console.log("Regular:", this.name);
    },
    arrowFn: () => {
        console.log("Arrow:", this.name); // undefined because arrow doesn't bind "this"
    }
};

obj.regularFn();
obj.arrowFn();

// Array copying
let arr1 = [1, 2, 3];
let arr2 = arr1; // reference copy
arr2.push(4);
console.log("arr1:", arr1, "arr2:", arr2);

let arr3 = [1, 2, 3];
let arr4 = [...arr3]; // spread copy
arr4.push(4);
console.log("arr3:", arr3, "arr4:", arr4);
