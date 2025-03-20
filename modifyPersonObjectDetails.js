const person = {
    name: "Hozaifa",
    age: "18",
    course: "Computer Science",
    city: "attock",
    
    cityliving: function() {
      console.log(`He lives in ${this.city}`);  // Correct way of logging the result
    }
  };
  
  person.skill = "cybersecurityanalyst";  // Adding a new property
  delete person.age;  // Deleting the age property
  person.city = "attock khurd";  // Updating the city property
  
  person.cityliving();  // Calling the cityliving method
  