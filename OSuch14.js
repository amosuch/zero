


class Vehicle{
    constructor (color, make, directionDegrees, topSpeed){
        this._color = color;
        this._make = make;
        this._directionDegrees = directionDegrees; //0-359, set a getter and setter
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
        if (this._directionDegrees == 0) {
            this._directionDegrees += 90;
            console.log(`The ${this._color} ${this._make} has turned right and is headed East.`);
            return this; 
        } else if(this._directionDegrees == 90){
            this._directionDegrees += 90;
            console.log(`The ${this._color} ${this._make} has turned right and is headed South.`);
            return this;
        } else if(this._directionDegrees == 180){
            this._directionDegrees +=90;
            console.log(`The ${this._color} ${this._make} has turned right and is headed West.`);
            return this;
        } else if(this._directionDegrees == 270){
            this._directionDegrees -= 270;
            console.log(`The ${this._color} ${this._make} has turned right and is headed North.`);
            return this;
        }

    }

    turnLeft(){
        if (this._directionDegrees == 90){
        this._directionDegrees -= 90;
        console.log(`The ${this._color} ${this._make} has turned left and is headed North.`);
        return this;
        } 
    else if (this._directionDegrees == 0){
        this._directionDegrees += 270;
        console.log(`The ${this._color} ${this._make} has turned left and is headed West.`);
        return this;
    }else if (this._directionDegrees == 270){
        this._directionDegrees -= 90;
        console.log(`The ${this._color} ${this._make} has turned left and is headed South.`);
        return this;
    }else if (this._directionDegrees == 180){
        this._directionDegrees -=90;
        console.log(`The ${this._color} ${this._make} has turned left and is headed East.`);
        return this;
    }
    }
}


class Bus extends Vehicle {
    constructor(color, make, directionDegrees, topSpeed, numberOfSeats){
        super(color, make, directionDegrees, topSpeed, numberOfSeats);
        this._numberOfSeats = numberOfSeats;

    }
}

class Ambulance extends Vehicle {
    constructor (color, make, directionDegrees, topSpeed){
        super(color, make, directionDegrees, topSpeed);
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

