// Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.


function checkObj(obj,checkProp) {
  // Only change code below this line
  let n=obj.hasOwnProperty(checkProp)
  if(n===true)
  {
  return obj[checkProp] ;
  }
  else{
    return "Not Found";
  }
  }
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"},"gift")
checkObj({"gift": "pony", "pet": "kitten", "bed": "sleigh"},"pony")
checkObj({"gift": "pony", "pet": "kitten", "bed": "sleigh"}, "house")
checkObj({"city": "Seattle"}, "city")
checkObj({"city": "Seattle"}, "district")
checkObj({"pet": "kitten", "bed": "sleigh"}, "gift")
  // Only change code above this line
