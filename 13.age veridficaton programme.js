let age=parseFloat(prompt("Enter your age:"))
if(age>=18)
    console.log("You can vote \nyou can also make your license");
else if(age>0 && age<18)
    console.log( "you are not eligible for anything" );
else
    console.log("Enter valid age");