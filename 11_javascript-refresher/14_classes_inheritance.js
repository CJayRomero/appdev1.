// Class Person
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}

// Subclass Student
class Student extends Person {
  study() {
    console.log(this.name + " is studying");
  }
}

// Usage
const person = new Person("Jay");
person.sayHello();

const student = new Student("Jay");
student.sayHello();
student.study();
