var  obtained_marks ;
var  total_marks=50;
var result ;
const percantage_calc={

     percantage (){
       result= (this.obtained_marks*100)/total_marks;
       console.log("The percantage of stundet is ", result)
       return result;
     }
};

const student_1= {
  obtained_marks:20,
};
const student_2= {
   
      obtained_marks:30,

 };
 const student_3= {
      obtained_marks:40,
 };

student_1.__proto__=percantage_calc;
student_2.__proto__=percantage_calc;
student_3.__proto__=percantage_calc;

student_1.percantage();
student_2.percantage();
student_3.percantage();

