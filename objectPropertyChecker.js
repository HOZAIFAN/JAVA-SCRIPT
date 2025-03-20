// Object representing a laptop's details
let object = {
    laptop: "core i7 third generation",
    model: "Hp",
    Graphiccard: "AMD reazon 9656",
    Ram: "16 GB",
    Harddrive: "256gb",
    SSD: "120gb"
};

// Function to check if a property exists in the object
const check_property = (object, property) => {
    return property in object;
}

while (true) {
    property = prompt("Enter the property to check, or type 'stop' to terminate:");

    // If the user types 'stop', the loop terminates
    if (property === "stop") {
        console.log("Exited");
        break; // Exit the loop
    } 
    // If the property exists, log the result
    else {
        console.log(check_property(object, property)); 
    }
}
