"use strict";
var myName = 'owen'; //s4 name value
var stateNum = 50; //s5
var sum = 5 + 4; //s6
function sayHello() {
    alert('Hello World');
}
sayHello();
function checkAge(personName, age) {
    if (age < 21) {
        return console.log('Sorry ' + personName + ', you are not old enought to view this page');
    }
    else {
        console.log('Welcome ' + personName);
    }
}
/*checkAge('Charles', 21;)
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
*/
var charles = {
    name: 'Charles',
    age: 21
};
var abby = {
    name: 'Abby',
    age: 27
};
var james = {
    name: 'James',
    age: 18
};
var john = {
    name: "John",
    age: 17
};
//dot notation
checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(john.name, john.age);
checkAge(james.name, james.age);
var veggies = ['kale', 'carrot', 'broccoli'];
for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
var pet = {
    name: 'Tauser',
    breed: 'Domestic Short Hair',
};
console.log(pet.name, pet.breed);
var friends = [
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
for (var i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
    //console.log(friends[i].name);
}
function getLength(string) {
    //console.log('doors and corners');
    return string.length;
}
var length = getLength('Hello World!');
if (length % 2 == 0) {
    console.log('The world is nice and even');
}
else {
    console.log('The world is an odd place!');
}
