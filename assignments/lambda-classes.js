// CODE here for your Lambda Classes

class Person{
    constructor(baseClass){
    this.name = baseClass.name;
    this.age = baseClass.age;
    this.location = baseClass.location;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(instructorClass){
        super(instructorClass)

        this.specialty = instructorClass.specialty;
        this.favLanguage = instructorClass.favLanguage;
        this.catchPhrase = instructorClass.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade({student,subject}){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Students extends Person{
    constructor(studentClass){
        super(studentClass)

        this.previousBackground = studentClass.previousBackground;
        this.className = studentClass.className;
        this.favSubject = studentClass.favSubject;
    }

    listsSubjects(){
        console.log(`${this.favSubject} /n `);
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    
    sprintCallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

}

class projectManager extends Person{
    constructor(PM){
        super(PM)
        this.gradClassName = PM.gradClassName;
        this.favInstructor = PM.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standytimes!`);
    }

    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
}


const Dan = new Instructor({
    name:'Dan Levy',
    age:'looks 36',
    location:'unknown',
    specialty: 'teaching',
    favLanguage:['JavaScript','react', 'CSS'],
    catchPhrase:'I like cats'

});
const carlos = new Students({
    name:'Carlos',
    age:'26',
    location:'Florida',
    previousBackground: 'business owner',
    className:'web20',
    favSubject: 'Javascript',
});

const isaac = new projectManager({
    name: 'Isaac',
    age:'unknown',
    location:'unknown',
    gradClassName:'Alpha leader',
    favInstructor: 'Dan Levy',
});



console.table(carlos);
console.log(carlos.listsSubjects());
console.log(carlos.PRAssignment('React'));
console.log(carlos.sprintCallenge('CSS Advanced'));
console.log(isaac.debugsCode('carlos','javascript'));
console.log(isaac.standUp('web_20'))
console.log(Dan.demo('laserporkchops'));