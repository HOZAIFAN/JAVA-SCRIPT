var a=parseFloat(prompt("Enter first cofficent a:"));
var b=parseFloat(prompt("Enter second cofficent b :"));
var c=parseFloat(prompt("Enter thirdS cofficent c:"));
let disc=b*b-4*a*c
if(disc>0){
    console.log("it have two real solution:")
    console.log("first real solution",(-b+sqrt(disc))/(2*a));
    console.log("second real solution",(-b-(disc))/(2*a));
}
else if (disc==0){
    console.log("There is only one real solution",-b/(2*a));
}
else
{  
    console.log("There is no real solution");

}