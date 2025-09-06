// Object with properties
let aboutMe = {
    name: "Jay",
    age: 21,
    course: "ACT",
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

aboutMe.introduce();

// Adding new property
aboutMe.hobby = "Drawing";
console.log(aboutMe);
