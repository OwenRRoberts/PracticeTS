let myName: string = 'owen';  //s4 name value
const stateNum: number = 50; //s5
let sum = 5 + 4; //s6

function sayHi(string) {  //s8
    alert('Hello World');
}

sayHi();

function checkAge(personName: string, age: number) {
    if (age < 21) {
        return console.log(`Sorry ${personName}, you are not old enought to view this page`)
    } else{
        console.log(`Welcome ${personName}`);
    }
}

/*checkAge('Charles', 21;)
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
*/

let charles = {
    name: 'Charles',
    age: 21
}

let abby = {
    name: 'Abby',
    age:  27
}

let james = {
    name: 'James',
    age: 18
}

let john = {
    name: "John",
    age: 17
}

//dot notation
checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(john.name, john.age);
checkAge(james.name, james.age);

let veggies = ['kale', 'carrot', 'broccoli'];

for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

let pet = {
    name: 'Tauser',
    breed: 'Domestic Short Hair',
};

console.log(pet.name, pet.breed);

let friends = [
{
    name: 'Shelby',
    age: 30
},

{
    name: 'claire',
    age: 30
},

{
    name: 'Darby',
    age: 18
},

{
    name: 'nirmal',
    age: 35
},

{
    name: 'David',
    age: 16
}

];


for (let i = 0; i < friends.length; i++){
    checkAge(friends[i].name, friends[i].age);
    //console.log(friends[i].name);
}

function getLength (string){
    //console.log('doors and corners');
    return string.length;
}

let length = getLength('Hello World!');

if (length % 2 == 0){
    console.log('The world is nice and even');
} else {
    console.log('The world is an odd place!');
}