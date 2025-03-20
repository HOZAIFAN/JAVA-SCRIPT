// Define the first object with laptop specifications
let laptop = {
    laptop: "core i7 third generation",
    model: "Hp",
    Graphiccard: "AMD reazon 9656",
    Ram: "16 GB",
    Harddrive: "256gb",
    SSD: "120gb"
};

// Define a new object with device information
let newobject = {
    device_name: "Asus"
};

// Use Object.assign() to copy properties from 'laptop' to 'newobject'
// This updates 'newobject' with all properties of 'laptop'
Object.assign(newobject, laptop);
console.log(newobject); 

// Modify the 'newobject' by adding a new property and deleting an existing one
newobject.stock = "Unavailable"; 
delete newobject.Graphiccard; 
console.log(newobject); 

// Combine both objects (original 'laptop' and modified 'newobject') into a new object
let combiningboth = Object.assign({}, laptop, newobject);
console.log(combiningboth); 

