// CODE here for your Lambda Classes



class Person { 
    constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
      this.gender = attributes.gender;
    }
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location} `;
    }
}

class Instructor extends Person {
    constructor(instAttributes) {
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
}
demo(subject) {
    return `Today we are learning about ${subject}`;
}
grade(subject) {
    return `${this.name} receives a perfect score on ${subject}`;
}
}

class Student extends Instructor {
    constructor(stuAttributes) {
        super(stuAttributes);
        this.studentBackground = stuAttributes.studentBackground;
        this.className = stuAttributes.className;
        this.favSubjects = stuAttributes.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignments(subject) {
        return `${this.name}has submitted a PR for ${subject}`;
    }
    sprintChallange(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(proAttributes) {
        super(proAttributes);
        this.gradClassName = proAttributes.gradClassName;
        this.favInstructor = proAttributes.favInstructor;
    }
    // standup() {

    }
}


