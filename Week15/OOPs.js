// ==============================================
// OOP in JavaScript - Complete Program Example
// Concepts covered:
// 1. Classes
// 2. Objects
// 3. Encapsulation
// 4. Abstraction
// 5. Inheritance
// 6. Polymorphism
// ==============================================


// ---------------------------------------------------
// CLASS: Vehicle
// This is the parent class (base class)
// It contains common properties and methods
// that all vehicles can use.
// ---------------------------------------------------
class Vehicle {
  constructor(brand, model, year) {
    // These are object properties
    this.brand = brand;
    this.model = model;
    this.year = year;

    // Encapsulation:
    // We store speed as part of the object state
    this.speed = 0;
  }

  // This method increases the speed
  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.brand} ${this.model} accelerated to ${this.speed} km/h`);
  }

  // This method decreases the speed
  brake(amount) {
    this.speed -= amount;

    // Prevent speed from going below 0
    if (this.speed < 0) {
      this.speed = 0;
    }

    console.log(`${this.brand} ${this.model} slowed down to ${this.speed} km/h`);
  }

  // This method displays vehicle details
  displayInfo() {
    console.log(`Vehicle Info: ${this.year} ${this.brand} ${this.model}`);
  }

  // This method will be overridden in child classes
  // This helps demonstrate polymorphism
  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
}


// ---------------------------------------------------
// CLASS: Car
// This class inherits from Vehicle
// Inheritance means Car gets access to the
// properties and methods of Vehicle.
// ---------------------------------------------------
class Car extends Vehicle {
  constructor(brand, model, year, fuelType) {
    // super() calls the parent class constructor
    super(brand, model, year);

    // Additional property specific to Car
    this.fuelType = fuelType;
  }

  // This method overrides the parent start() method
  // This is polymorphism: same method name, different behavior
  start() {
    console.log(`${this.brand} ${this.model} car starts with a smooth ignition.`);
  }

  // Car-specific method
  openTrunk() {
    console.log(`${this.brand} ${this.model} trunk is now open.`);
  }
}


// ---------------------------------------------------
// CLASS: ElectricCar
// This class also inherits from Vehicle
// It has its own extra property and method
// ---------------------------------------------------
class ElectricCar extends Vehicle {
  constructor(brand, model, year, batteryCapacity) {
    super(brand, model, year);

    // Extra property specific to ElectricCar
    this.batteryCapacity = batteryCapacity;
  }

  // Overriding the start() method again
  // This is another example of polymorphism
  start() {
    console.log(`${this.brand} ${this.model} starts silently with electric power.`);
  }

  // ElectricCar-specific method
  charge() {
    console.log(`${this.brand} ${this.model} is charging. Battery: ${this.batteryCapacity} kWh`);
  }
}


// ---------------------------------------------------
// ABSTRACTION EXPLANATION
// Abstraction means showing only necessary actions
// and hiding internal complexity.
//
// Example:
// The user only calls:
//    car.accelerate(20)
// The user does not need to know how speed is updated internally.
//
// Same with:
//    car.start()
// The user only knows the vehicle starts.
// The inner implementation is hidden inside the method.
// ---------------------------------------------------


// ---------------------------------------------------
// OBJECT CREATION
// These are objects created from classes
// ---------------------------------------------------
const car1 = new Car("Toyota", "Camry", 2022, "Petrol");
const ev1 = new ElectricCar("Tesla", "Model 3", 2024, 75);


// ---------------------------------------------------
// USING OBJECTS
// ---------------------------------------------------
console.log("----- DISPLAY INFO -----");
car1.displayInfo();
ev1.displayInfo();

console.log("\n----- START VEHICLES -----");
car1.start();   // Polymorphism: Car version of start()
ev1.start();    // Polymorphism: ElectricCar version of start()

console.log("\n----- ACCELERATION AND BRAKING -----");
car1.accelerate(30);
car1.brake(10);

ev1.accelerate(50);
ev1.brake(20);

console.log("\n----- SPECIFIC METHODS -----");
car1.openTrunk();
ev1.charge();


// ---------------------------------------------------
// POLYMORPHISM USING ARRAY OF OBJECTS
// Same method name "start()"
// Different objects respond differently
// ---------------------------------------------------
console.log("\n----- POLYMORPHISM DEMO -----");

const vehicles = [car1, ev1];

for (let vehicle of vehicles) {
  vehicle.start();
}


// ---------------------------------------------------
// SUMMARY OUTPUT
// ---------------------------------------------------
console.log("\n----- FINAL SUMMARY -----");
console.log("Classes used: Vehicle, Car, ElectricCar");
console.log("Objects created: car1, ev1");
console.log("Encapsulation: speed and behavior stored inside class methods");
console.log("Abstraction: user calls methods without knowing internal logic");
console.log("Inheritance: Car and ElectricCar inherit from Vehicle");
console.log("Polymorphism: start() behaves differently for each object");