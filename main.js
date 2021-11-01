const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    }

    printField(){
        const arr = this._field;
        arr.forEach(element => console.log(element.join('')));
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

    moveUp(){
        const player = this.locatePlayer();

        //code when he loses
        if(player[0] === 0) {
            return;
        }
        this._field[player[0]][player[1]] = fieldCharacter;
        player[0] = player[0] - 1;
        this._field[player[0]][player[1]] = pathCharacter;
    }

    moveDown(){
        const player = this.locatePlayer();
        if(player[0] === 0) {
            return;
        }
        this._field[player[0]][player[1]] = fieldCharacter;
        player[0] = player[0] + 1;
        this._field[player[0]][player[1]] = pathCharacter;
    }

    moveLeft(){
        const player = this.locatePlayer();
        if(player[0] === 0) {
            return;
        }
        this._field[player[0]][player[1]] = fieldCharacter;
        player[1] = player[1] - 1;
        this._field[player[0]][player[1]] = pathCharacter;
    }

    moveRight(){
        const player = this.locatePlayer();
        if(player[0] === 0) {
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

myField.printField();
myField.moveLeft();
myField.printField()
myField.moveRight();
myField.printField()
myField.moveUp();
myField.printField()
myField.moveDown();
myField.printField()
