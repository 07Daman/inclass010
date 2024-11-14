// 1. Constructor function for Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

// 2. Accelerate method to increase speed by 10 km/h
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
};

// 3. Brake method to decrease speed by 5 km/h
Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
};

// 4. Create car objects and test
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
car2.brake();
