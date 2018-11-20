// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${
      this.quirkyFact
      }`;
  }
}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }

  bio() {
    return `I'm a student at Lighthouse Labs. ${super.bio()}`;
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }

  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

const student = new Student('joe', 'hello');
console.log(student.bio());
const mentor = new Mentor('Bob', 'I like turtles');
console.log(mentor.bio());
