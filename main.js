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

    printField(){
        const arr = this._field;
        arr.forEach(element => console.log(element.join('')));
    }

    get player(){
        return this._player;
    }

    get field(){
        return this._field;
    }

    locatePlayer() {
        const arr = this._field;
        const returnedArr = [];
        for(let i = 0; i < arr.length; i++) {
            const result = arr[i].indexOf(pathCharacter);
            if(result !== -1) {
                returnedArr.push(i);
                returnedArr.push(result);
            }
        }
        return returnedArr;
    }

    //moves player up
    moveUp(){
        const player = this.locatePlayer();
        //check collision
        if(player[0] === 0) {
            return;
        }
        this._field[player[0]][player[1]] = fieldCharacter;
        player[0] = player[0] - 1;
        this._field[player[0]][player[1]] = pathCharacter;
    }

    //moves player down
    moveDown(){
        const player = this.locatePlayer();
        //check collision
        if(player[0] === this.field.length - 1) {
            return;
        }
        this._field[player[0]][player[1]] = fieldCharacter;
        player[0] = player[0] + 1;
        this._field[player[0]][player[1]] = pathCharacter;
    }

    //moves player to the left
    moveLeft(){
        const player = this.locatePlayer();
        //check collision
        if(player[1] === 0) {
            return;
        }
        this._field[player[0]][player[1]] = fieldCharacter;
        player[1] = player[1] - 1;
        this._field[player[0]][player[1]] = pathCharacter;
    }

    //moves player to the right
    moveRight(){
        const player = this.locatePlayer();
        //check collision
        if(player[1] === this.field[player[1]].length - 1) {
            return;
        }
        this._field[player[0]][player[1]] = fieldCharacter;
        player[1] = player[1] + 1;
        this._field[player[0]][player[1]] = pathCharacter;
    }
}

//this is the current field
const myField = new Field([
  [fieldCharacter, fieldCharacter, fieldCharacter, hole, hole],
  [fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter],
  [fieldCharacter, hole, fieldCharacter, hole, fieldCharacter],
  [fieldCharacter, fieldCharacter, fieldCharacter, pathCharacter, fieldCharacter],
  [hole, fieldCharacter, hole, fieldCharacter, hat]
]);


console.log('Welcome to the game! The directions are [ w | a | s | d ]')


const moveSomewhere = (direction) => {
    if(direction === 'w') {
        myField.moveUp();
    } else if(direction === 'a') {
        myField.moveLeft();
    } else if(direction === 's') {
        myField.moveDown();
    } else if(direction === 'd') {
        myField.moveRight();
    }
}



while(myField.player) {
    myField.printField();
    moveSomewhere(prompt('what direction should I go? '));
}
