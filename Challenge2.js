// 1. ES6 Class for CarCl
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // 2. Accelerate method to increase speed by 10 km/h
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    // 3. Brake method to decrease speed by 5 km/h
    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    // 4. Getter for speed in mi/h
    get speedUS() {
        return this.speed / 1.6;
    }

    // 5. Setter for speed in mi/h
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

// Test data
const car3 = new CarCl('Ford', 120);
car3.accelerate();
car3.brake();
console.log(`Speed in mi/h: ${car3.speedUS}`);
car3.speedUS = 50;
console.log(`New speed in km/h: ${car3.speed}`);
