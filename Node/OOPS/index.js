//1.

class School {
    constructor(name,age){
        console.log('School constructor called');
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log("Hello Student");
    }
}


class Student extends School {
    constructor(name,age,marks){
        console.log('student constructor called')
        super(name,age);

        this.marks = marks;
    }

    eat(){
        console.log('Student like maggi to eat');
    }
}

class Teacher extends School {
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject
    }

    mySub(){
        console.log(`i Would like  ${subject} to teach`)
    }
}