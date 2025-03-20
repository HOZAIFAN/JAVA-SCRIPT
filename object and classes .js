class Car {
    // Constructor to initialize the car's details
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Method to display car information
    display_info() {
        console.log(`The car is a ${this.brand} ${this.model}, launched in ${this.year}.`);
    }
}

// Creating an object of the Car class
const JAPI = new Car("Bugatti", "G6X", 2023);

// Displaying the car information
JAPI.display_info();
