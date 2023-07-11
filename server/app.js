let express = require('express');
let bodyParser=require('body-parser');
let app = express();
let port=process.env.port || 8080;
let router = express.Router();
const cors = require("cors")  // npm i cors
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/student" , router);
app.listen(port,() => {
  console.log(`Node js application running on port : ${port}`);

});

let students = [
  {
    firstName: 'Saman',
    lastName: 'John',
	  dateOfBirth: '1998-06-23',
    email: 'saman@gmail.com',
	  sid:'IT17236545',
    center: 'Kandy',
	  Semester: 1,
    Cgpa:3
  },
  {
    firstName: 'Dineth',
    lastName: 'Hesara',
	  dateOfBirth: '1999-09-07',
    email: 'dinethhesara20@gmail.com',
	  sid:'IT21717086',
    center: 'Colombo',
	  Semester: 1,
    Cgpa:3
  },
];

//show all
router.get('/',(req,res)=> {
  res.json(students);
});

//Insert New
router.post('/student', (req, res)=> {
const newstudent = req.body;
console.log(newstudent);
students.push(newstudent);
res.send('Student is added to the list');
});

//Find by ID
router.get('/student/id/:id', (req, res)=> {
let SID=toString(req.params.id);
console.log(SID);
let tempStu=students.filter((x) => x.sid == SID)[0];
if(tempStu){
res.json(tempStu);
}
else{
res.sendStatus(404);
}
});

//Find by Name
router.get('/student/name/:name', (req, res)=> {
let sname=toString(req.params.name);
console.log(sname);
let tempStu=students.filter((x) => x.firstName == sname)[0];
if(tempStu){
res.json(tempStu);
}
else{
res.sendStatus(404);
}
});

  
 //Find by Center
 router.get('/student/center/:center', (req, res)=> {
    
  let scenter=req.params.center;
  
  let tempStu=students.filter((x) => x.center== scenter)[0];
  if(tempStu){
  res.json(tempStu);
  }
  else{
  res.sendStatus(404);
  }
  });

   //Find by semester
  router.get('/student/semester/:semester', (req, res)=> {
  
  let ssemester=req.params.semester;
  
  let tempStu=students.filter((x) => x.Semester== ssemester)[0];
  if(tempStu){
  res.json(tempStu);
  }
  else{
  res.sendStatus(404);
  }
  });

  //Find by cgpa
  router.get('/student/cgpa/:cgpa', (req, res)=> {
  
  let scgpa=req.params.cgpa;
  
  let tempStu=students.filter((x) => x.Cgpa== scgpa)[0];
  if(tempStu){
  res.json(tempStu);
  }
  else{
  res.sendStatus(404);
  }
  });

//Delete by Id
router.delete("/student/deleteid/:id", (req, res) => {
let studentId =toString(req.params.id);
console.log(studentId)
let currentStudent = students.filter((x) => x.sid == studentId)[0];
if (currentStudent) {
students = students.filter((x) => x.sid != studentId);
res.statusMessage = "Student deleted successfully.";
res.sendStatus(200);
} else {
res.statusMessage = "Student does not exist";
res.sendStatus(404);
}
});

 //Delete by email
 router.delete("/student/deleteemail/:email", (req, res) => {
  let studentEmail =req.params.email;
  console.log(studentEmail)
  let currentStudent = students.filter((x) => x.email== studentEmail)[0];
  if (currentStudent) {
  students = students.filter((x) => x.Email != studentEmail);
  res.statusMessage = "Student deleted successfully.";
  res.sendStatus(200);
  } else {
  res.statusMessage = "Student does not exist";
  res.sendStatus(404);
  }
  }); 

//update by id 
  router.put("/student/id/:id", (req, res)=> {
let SID=toString(req.params.id);
let stu=req.body;
console.log(stu);
let tempStu=students.filter((x) => x.sid ===SID)[0];
if(tempStu){
tempStu.firstName = stu.firstName;
tempStu.lastName = stu.lastName;
tempStu.dateOfBirth = stu.dateOfBirth;
tempStu.email = stu.email;
tempStu.sid = stu.sid;
tempStu.center = stu.center;
tempStu.Semester = stu.Semester;
tempStu.Cgpa = stu.Cgpa;
res.sendStatus(200);
}
else{
res.sendStatus(404);
}
});

