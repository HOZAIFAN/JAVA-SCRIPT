const calculator=(operation,a,b)=>{
    switch(operation){
        case "1":
            n=a+b;
            return n;
        case "2":
            return a-b;
        case "3":
            return a/b;
        case "4":
            return a%b;
    }
}

while(true){
    const operation = prompt('choose  opeartion:\n 1.add \n 2.subtract \n 3.divide \n 4.reminder \n 5.Exit \n choose one of them:' );

    
    if(operation==5){
        console.log("loop teriminates")
        break;
    }
    else {
      
        const a=prompt('first variable:')
        const b=prompt('second variable:')

        console.log(calculator(operation,a,b))
    }
}



