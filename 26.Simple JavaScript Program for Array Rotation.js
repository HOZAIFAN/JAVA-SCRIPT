
// this program will rotate element mean last element will move to begining
// while other will shifted to right
let arr=[1,2,3,4,5,6,7,8,9]

let  n=parseInt(prompt("Enter how many numbers you want to rotate."));
    if(n > arr.length){
        n=n%arr.length;
        let s;
         s=arr.splice(arr.length-n , n );
        arr.unshift(...s);
        console.log(` the rotated array is ${arr} `);
    }
    else{
        let s;
        s=arr.splice(arr.length-n , n , 0);
        arr.unshift(...s);
        console.log(` the rotated array is ${arr} `);
    }


