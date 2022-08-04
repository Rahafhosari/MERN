// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
// function actuallyPrintingNames() {
//     for (let index = 0; index < names.length; index++) {
//         const name = names[index];
//         console.log(name + ' was found at index ' + index);
//     }
// }
//     actuallyPrintingNames();
// }
// printNames(beatles);

// const person = { 
//     firstName: 'Bob', 
//     lastName: 'Marley', 
//     email: 'bob@marley.com', 
//     password: 'sekureP@ssw0rd9', 
//     username: 'barley', 
//     createdAt: 1543945177623
// };
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const { email, password} = person;
// console.log(email,password);
// const [firstAnimal, secondAnimal, thirdAnimal] = animals;
// console.log(firstAnimal,secondAnimal,thirdAnimal);

class Vehicle {
    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive() {
        this.miles += 10;
        console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
    }
}

// child M5 class
class M5 extends Vehicle {
    constructor(color) {
        super("BMW", "M5", color);
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.drive(); //parentFunction()
        console.log(message);
    }
}
const m5 = new M5("Blue");
m5.childFunction();