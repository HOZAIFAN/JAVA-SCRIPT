// this is and object with function
const info={
    name:"muhammad hozaifa naeem",
    age:18,
    level:13,
    marks:54,
    funmarks:function() {
        console.log("your marks are marks",this.marks)
    },
};

const student = {
    marks:500,  
};
// this now protoype of studnet object we can use its funciton
student.__proto__ = info;
//  Call the funmarks function on the student object
student.funmarks();  // This will print: "your marks are 500"