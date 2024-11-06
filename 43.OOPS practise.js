// Implement a Car Class with Multiple Methods: Design a Car class with properties make, model, and year. Add methods startEngine() and stopEngine(), which return messages indicating the car's engine status.

let make;
let model;
let year;
class car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start_engine() {
        let engnine_status = "The engine will start and  work";
        return engnine_status;

    };
    stop_enginge() {
        let engnine_status = "The engine will stop also";
        return engnine_status;
    };
}
make = prompt("Enter the maker of car");
model = prompt("Enter the model of car");
year = prompt("Enter the year of car");

let bogati = new car(make, model, year);
console.log(` ${bogati.start_engine()} and will have model ${model} and will be maked by ${make} in year ${make}`);