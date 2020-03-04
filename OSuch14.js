class Vehicle{
    constructor (color, make, direction){
        this._color = color;
        this._make = make;
        this._direction = 0; //0-359, set a getter and setter
        this._currentSpeed = 0;
        this._topSpeed = 180; //work on top speed
        this._engineStarted = false;
    }

    accelerate(){
        if (this._currentSpeed<180) {
            this._currentSpeed += 30;
            console.log(`${this._color} ${this._make} is accelerating, speed is now ${this._currentSpeed} mph.`);
            return this;    
        } else {
            console.log(`${this._color} ${this._make} cannot accelerate, it has reached top speed at ${this._topSpeed} mph.`);
            return this;
        }
        
    }

    brake(){
        this._currentSpeed -= 30;
        console.log(`${this._color} ${this._make} is braking, speed is now ${this._currentSpeed} mph.`);
        return this;
    }

    turnOn(){
        this._engineStarted = true;
        console.log(`${this._color} ${this._make} has started it's engine.`);
        return this;
    }

    turnOff(){
        this._engineStarted = false;
        console.log(`${this._color} ${this._make} has turned off it's engine.`)
        return this;
    }

    turnLeft(){
        this._direction += 90;
        console.log(`${this._color} ${this._make} has turned ${this._direction} degrees left.`)
        return this;
    }

    turnRight(){
        this._direction -= 90;
        console.log(`${this._color} ${this._make} has turned ${this._direction} degrees right.`)
        return this;
    }
}

class Bus extends Vehicle {
        super(color, make, numberOfSeats, direction){
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
        console.log(`Siren is on`);
        return this;
    }

    sirenOff(){
        this._siren = false;
        console.log(`Siren is off`);
        return this;
    }
}

