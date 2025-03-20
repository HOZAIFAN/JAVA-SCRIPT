processData=(numbers)=>{
    list=numbers.split(" ")
    list=list.map(num=> parseInt(num)).filter(num=>num>10).reduce((sum,num)=>sum+num,0)
    return list 
}
numbers=prompt("Enter the Numbers using space :")
console.log(processData(numbers))