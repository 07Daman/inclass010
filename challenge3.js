// 1. Constructor function for EV, child class of Car
function EV(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

// 2. Link prototypes and set constructor for EV
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

// 3. ChargeBattery method
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`Battery charged to ${this.charge}%`);
};

// 4. Override accelerate method
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

// Test data
const evCar = new EV('Tesla', 120, 23);
evCar.accelerate();
evCar.brake();
evCar.chargeBattery(90);
evCar.accelerate();
