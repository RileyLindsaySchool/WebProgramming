let json = `{
 "students": [
  {
   "name": "John",
   "age": 20,
   "major": "Computer Science",
   "details": {
    "year": "Sophomore",
    "semester": "Fall"
   },
   "grades": {
    "webProgramming": "A",
    "python": "B+",
    "database": "A-"
   }
  },
  {
   "name": "Emma",
   "age": 21,
   "major": "Information Technology",
   "details": {
    "year": "Junior",
    "semester": "Spring"
   },
   "grades": {
    "webProgramming": "A-",
    "python": "A",
    "database": "B+"
   }
  },
  {
   "name": "Michael",
   "age": 22,
   "major": "Software Engineering",
   "details": {
    "year": "Senior",
    "semester": "Fall"
   },
   "grades": {
    "webProgramming": "B+",
    "python": "A",
    "database": "A"
   }
  }
 ]
}`;


// Convert to object
let object = JSON.parse(json);


// Display the major of the second student
console.log(`The second student's major is ${object.students[1].major}`)


// Display the name of the first student
console.log(`The first student's name is ${object.students[0].name}`);


// Loop through the students and display each student's name
object.students.forEach(student => {
    console.log(`Student name: ${student.name}`);
});