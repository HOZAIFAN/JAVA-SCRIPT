let weight=parseFloat(prompt("Enter your weight"));
let height=parseFloat(prompt("Enter your height"));

var BMI = weight / (height**2) // body mass index

if(BMI<18.5 && BMI>0)  
    console.log("Underweight","Your BMI is",BMI);
else if(BMI>=18.5 && BMI<=25)
    console.log("Normal weight","Your BMI is",BMI);
else if(BMI> 25 && BMI< 30)
    console.log("Overweight","Your BMI is",BMI);
else if( BMI>=30)
    console.log("Obese","Your BMI is",BMI);
else
    console.log("invalid ","Your BMI is",BMI);
