outerfunction =(a)=>{
    innerfunction=(z)=>{
          return z*z
     }
     return innerfunction(a)
 }
 console.log(outerfunction(3))