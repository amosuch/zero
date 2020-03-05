


class Vehicle{
    constructor (color, make, direction, topSpeed){
        this._color = color;
        this._make = make;
        this._direction = direction; //0-359, set a getter and setter
        this._currentSpeed = 0;
        this._topSpeed = topSpeed;
        this._engineStarted = false;
    }


    accelerate(){
        if (this._currentSpeed< this._topSpeed) {
            this._currentSpeed += 15;
            console.log(`The ${this._color} ${this._make} is accelerating, speed is now ${this._currentSpeed} mph.`);
            return this;    
        } else {
            console.log(`The ${this._color} ${this._make} cannot accelerate, it has reached top speed at ${this._topSpeed} mph.`);
            return this;
        }
        
    }

    brake(){
        if (this._currentSpeed>=16) {
            this._currentSpeed -= 15;
            console.log(`The ${this._color} ${this._make} is braking, speed is now ${this._currentSpeed} mph.`);
            return this;
        } else {
            console.log(`The ${this._color} ${this._make} has stopped.`);
            return this;
        }
    }

    turnOn(){
        this._engineStarted = true;
        console.log(`The ${this._color} ${this._make} has started it's engine.`);
        return this;
    }

    turnOff(){
        this._engineStarted = false;
        console.log(`The ${this._color} ${this._make} has turned off it's engine.`)
        return this;
    }

    turnRight(){
        if (this._direction <=269) {
            this._direction += 90;
        console.log(`The ${this._color} ${this._make} has turned ${this._direction} left.`);
        return this; //east (90), west (270), north (0), south (180)
        } else{
        this._direction = 0;
        console.log(`The ${this._color} ${this._make} has turned ${this._direction} left.`);
        return this;
        }
    }

    turnLeft(){
        if (this._direction >=90){
        this._direction -= 90;
        console.log(`The ${this._color} ${this._make} has turned ${this._direction} degrees right.`)
        return this;
    } else {
        this._direction = 0;
        console.log(`The ${this._color} ${this._make} has turned ${this._direction} left.`);
        return this;
    }
}
}

class Bus extends Vehicle {
    constructor(color, make, direction, topSpeed, numberOfSeats){
        super(color, make, direction, topSpeed, numberOfSeats);
        this._numberOfSeats = numberOfSeats;

    }
}

class Ambulance extends Vehicle {
    constructor (color, make, direction){
        super(color, make, direction);
        this._siren = false;
    }
    sirenOn(){
        this._siren = true;
        console.log(`The siren on the ${this._color} ${this._make} is on.`);
        return this;
    }

    sirenOff(){
        this._siren = false;
        console.log(`The siren on the ${this._color} ${this._make} is off.`);
        return this;
    }
}

