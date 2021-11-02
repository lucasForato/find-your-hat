const prompt = require('prompt-sync')();

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
        this._player = true;

    }

    get player(){
        return this._player;
    }

    get field(){
        return this._field;
    }

    //prints the field
    printField(){
        const arr = this._field;
        arr.forEach(element => console.log(element.join('')));
    }

    //this function exits the app if you fall into a hole.
    checkHoles(holes){
        const player = this.locateItem(pathCharacter);
        holes.forEach(hole => {
            if(hole[0] === player[0][0] && hole[1] === player[0][1]) {
                console.log('Game over. You fell int a hole.');
                this._player = false;
            }
        })
    }

    checkHat(hat){
        const player = this.locateItem(pathCharacter);
        if(player[0][0] === hat[0][0] && player[0][1] === hat[0][1]) {
            console.log('Good job, you found your hat!')
            this._player = false;
        }
    }

    //locates the x and y coordinates of the player
    locateItem(item) {
        const arr = this._field;
        const returnedArr = [];
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; j++) {
                if(arr[i][j] === item) {
                    const result = [i, j]
                    returnedArr.push(result);
                }
            }
        }
        return returnedArr;
    }

    //moves player up
    moveUp(){
        const player = this.locateItem(pathCharacter);
        const holes = this.locateItem(hole);
        const hatLoc = this.locateItem(hat);
        //check collision
        if(player[0][0] === 0) {
            console.log("I can't go there...");
            return;
        }

        //move character
        this._field[player[0][0]][player[0][1]] = fieldCharacter;
        player[0][0] = player[0][0] - 1;
        this._field[player[0][0]][player[0][1]] = pathCharacter;

        //check if the character fell in a hole
        this.checkHoles(holes);
        this.checkHat(hatLoc);
    }

    //moves player down
    moveDown(){
        const player = this.locateItem(pathCharacter);
        const holes = this.locateItem(hole);
        const hatLoc = this.locateItem(hat);
        //check collision
        if(player[0][0] === this._field.length - 1) {
            console.log("I can't go there...");
            return;
        }

        //move character
        this._field[player[0][0]][player[0][1]] = fieldCharacter;
        player[0][0] = player[0][0] + 1;
        this._field[player[0][0]][player[0][1]] = pathCharacter;

        //check if the character fell in a hole
        this.checkHoles(holes);
        this.checkHat(hatLoc);
    }
    
    //moves player down
    moveLeft(){
        const player = this.locateItem(pathCharacter);
        const holes = this.locateItem(hole);
        const hatLoc = this.locateItem(hat);
        //check collision
        if(player[0][1] === 0) {
            console.log("I can't go there...");
            return;
        }

        //move character
        this._field[player[0][0]][player[0][1]] = fieldCharacter;
        player[0][1] = player[0][1] - 1;
        this._field[player[0][0]][player[0][1]] = pathCharacter;

        //check if the character fell in a hole
        this.checkHoles(holes);
        this.checkHat(hatLoc);
    }

    moveRight(){
        const player = this.locateItem(pathCharacter);
        const holes = this.locateItem(hole);
        const hatLoc = this.locateItem(hat);
        //check collision
        if(player[0][1] === this._field[player[0][0]].length - 1) {
            console.log("I can't go there...");
            return;
        }

        //move character
        this._field[player[0][0]][player[0][1]] = fieldCharacter;
        player[0][1] = player[0][1] + 1;
        this._field[player[0][0]][player[0][1]] = pathCharacter;

        //check if the character fell in a hole
        this.checkHoles(holes);
        this.checkHat(hatLoc);
    }
}

//this is the current field
const myField = new Field([
  [pathCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [hole, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, hole, hole, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole],
  [fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, hole, hole, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter],
  [hole, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, hole, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hat, fieldCharacter, fieldCharacter, fieldCharacter],

]);


const moveSomewhere = (direction) => {
    if(direction === 'w') {
        myField.moveUp();
    } else if(direction === 'a') {
        myField.moveLeft();
    } else if(direction === 's') {
        myField.moveDown();
    } else if(direction === 'd') {
        myField.moveRight();
    } else {
        console.log('Please, enter a valid direction!');
    }
}




//THIS LOOP MAKES THE GAME WORK
console.log('Welcome to the game! The directions are [ w | a | s | d ]')
while(myField.player) {
    myField.printField();
    moveSomewhere(prompt('what direction should I go? '));
}
