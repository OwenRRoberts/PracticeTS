let objArray = [];

let Dice = function () {
    this.value = this.roll();  //forgot to call this.roll as function, so it was screwy 
    this.div = document.createElement('div');
    this.div.innerText = this.value;  //creates text val inside dice as value --> roll --> randDiceNum
    this.div.className = 'dice';
    document.getElementById('container').appendChild(this.div);
    this.div.addEventListener('click', function () {  
        this.value = this.roll();
        this.div.innerText = this.value;
    }.bind(this));
    this.div.addEventListener('dblclick', function () {  //on double click, remove a dice
        this.div.remove();
        let id = objArray.indexOf(this);
        objArray.splice(id, 1);
    }.bind(this));
}

//calls the random function for determining what num goes on a die
Dice.prototype.roll = function () {  
    return randDiceNum();
}

//creates a rando between 1-6 for the dice
function randDiceNum() {
    return Math.floor(Math.random() * 6 + 1); 
}

//create a new dice on page
document.getElementById('genDie').addEventListener('click', function () {  
    let d = new Dice();
    objArray.push(d);
})

//on clicking dice, rerolls that one dice
document.getElementById('rollDie').addEventListener('click', function () {
    for (var i = 0; i < objArray; i++) {
        objArray[i].value = objArray[i].roll();
        objArray[i].div.innerText = objArray[i].value;
    }
})

//adds up the total dice rolls on screen
document.getElementById('sumDie').addEventListener('click', function () {
    let total = 0;
    for (var i = 0; i < objArray.length; i++) {
        total += objArray[i].value;
    }
    alert(`all the die add up to ${total}`);
})