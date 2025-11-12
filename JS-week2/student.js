

const class07Students = [];

function addStudentToClass(studentName) {
 if(!studentName.trim()){
  return "You cannot add an empty string to a class";
 }
 if(class07Students.includes(studentName)){
  return  "Student " + studentName + " is already in the class."
 } 
 if(class07Students.length >= 6 && studentName !== "Queen" ){
  return "Cannot add more students to class 07";
 }
class07Students.push(studentName);
return class07Students;
}

function getNumberOfStudents(studentName) {
  return class07Students.indexOf(studentName) +1;

  }
  getNumberOfStudents()

//===========
console.log(addStudentToClass('kevin'))
console.log(addStudentToClass('Leo'))
console.log(addStudentToClass('Leo')) // adding duplicate noun 
console.log(addStudentToClass('Micelle'))
console.log(addStudentToClass('Micro'))
console.log(addStudentToClass(' ')) // Adding empty value
console.log(addStudentToClass('Abbas'))
console.log(addStudentToClass('Carl'))
console.log(addStudentToClass('Nadia')) // Adding new noun to check limit
console.log(addStudentToClass('Helena')) // Adding new noun to check limit
console.log(addStudentToClass('Jonas')) // Adding new noun to check limit
console.log(addStudentToClass('Queen')) // Adding Queen to full class


console.log(getNumberOfStudents('Abbas')) // to get the number of student + 1







