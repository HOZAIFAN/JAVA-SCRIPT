class car {
    constructor() {
        console.log("Creating a new car")
    }
    carmodel(model){
        this.model=model
    }
    carbrand(brand){
        this.brand=brand
    }
    publishedyear(year){
        this.year=year
    }
    age(){
        console.log(`The car is off ${this.model} of ${this.brand} and published in ${this.year}`)}
    }
   fortuner = new car

