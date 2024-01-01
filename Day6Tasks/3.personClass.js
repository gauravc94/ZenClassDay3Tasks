// Write a "person" class to hold all the details

class Person{
    constructor(firstName, lastName, age, gender, email, phone, address){

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.address = address;

    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    getFullInfo(){
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Age: ${this.age}, Gender: ${this.gender}, email: ${this.email}, Phone: ${this.phone}, Address: ${this.address}`;
    }
}


const person1 = new Person("Amy", "Jackson", 33, "Female", "amy@yahoo.com", 9922118098, "123 Baker Street, London, England");

const person2 = new Person("Jose", "Perreira", 21, "Male", "jose_p@gmail.com", 8555553991, "82 Sunset Boulevard, California, USA ");

// Display the Full Name of person 1
console.log(person1.getFullName());

// Display the Full Information of person 1
console.log(person1.getFullInfo());

// Display the Full Name of person 2
console.log(person2.getFullName());

// Display the Full Information of person 2
console.log(person2.getFullInfo());


