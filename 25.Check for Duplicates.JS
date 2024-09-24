
var arr=[1,2,5,2,4,5,6,8,9,1,6,8,4,9,3,6,8,5,6]

for( var j=1; j <= 6  ; j++)
    {
    var  count=0;
    for(var i=0; i<arr.length ; i++)
    {
        if(  j == arr[i]  ) {
             count=count+1; 
             }
        
    }

console.log(`The number ${ j } exists ${count} times.`);      
}