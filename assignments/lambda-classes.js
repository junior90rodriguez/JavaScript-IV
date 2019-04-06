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
        return `${this.name} has submitted a PR for ${subject}`;
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
}


const junior = new Student({
    name: 'Junior',
    location: 'Los Angeles',
    age: 28,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: 'Got em coach'
});

const arianna = new Student({
    name: 'Arianna',
    location: 'Los Angeles',
    age: 21,
    gender: 'female',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: 'Lets go'
});

const jasmin = new Student({
    name: 'Jasmin',
    location: 'Los Angeles',
    age: 22,
    gender: 'female',
    favLanguage: 'PHP',
    specialty: 'Back-end',
    catchPhrase: 'Im here'
});

const jordyn = new Instructor({
    name: 'Jordyn',
    location: 'Des Moines',
    age: 28,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: 'Listen Linda'
});

const adam = new Instructor({
    name: 'Adam',
    location: 'Kansas City',
    age: 32,
    gender: 'male',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: 'I loove to code'
});

const mark = new Instructor({
    name: 'Mark',
    location: 'New York',
    age: 45,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: 'CSS rocks'
});

const julio = new ProjectManager({
    name: 'Julio',
    location: 'Oklahoma',
    age: 37,
    gender: 'male',
    favLanguage: 'Ruby',
    specialty: 'Full-stack',
    catchPhrase: 'Whats up'
});

const monica = new ProjectManager({
    name: 'Monica',
    location: 'Miami',
    age: 29,
    gender: 'female',
    favLanguage: 'PHP',
    specialty: 'Back-end',
    catchPhrase: 'Thats what she said'
});

const hector = new ProjectManager({
    name: 'Hector',
    location: 'Wisconsin',
    age: 53,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Full-stack',
    catchPhrase: 'I love cheese'
});


console.log(hector.name);
console.log(junior.speak());
console.log(arianna.favLanguage);
console.log(adam.age);
console.log(julio.demo('React'));
console.log(jasmin.PRAssignments('Javascript IV'));