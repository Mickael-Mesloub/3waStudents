class Vehicle {
	constructor(color, model) {
		this.color = color;
		this.model = model;
	}

	display() {
		return `This vehicle is a ${this.color} ${model}.`;
	}
}

class Car extends Vehicle {
	constructor(color, model) {
		super(color, model);
	}
	display() {
		return `This car is a ${this.color} ${this.model}.`;
	}
}

class Motorcycle extends Vehicle {
	constructor(color, model) {
		super(color, model);
	}
	display() {
		return `This motorcycle is a ${this.color} ${this.model}.`;
	}
}

const audi = new Car("black", "Q5");
const harley = new Motorcycle("red", "Harley Davidson");

console.log(audi.display(), harley.display());
