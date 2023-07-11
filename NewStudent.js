var stu = null;
$(document).ready(function(){
  $("#submit").click(function(){
   let student= JSON.stringify(
      {
      "firstName": $('#fname').val(),
      "lastName": $("#lname").val(),
      "dateOfBirth": $("#dob").val(),
      "email": $("#mail").val(),
      "sid": $("#SID").val(),
      "center": $("#lstcenter").val(),
	    "Semester": $("#lstsem").val(),
      "cgpa": $("#number").val()

      });
      console.log(student);
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/api/student/student',
      contentType: 'application/json',
      data: student ,
      success: function (data, textStatus, jQxhr) {
      alert("Data Inserted");
      },
      error: function (xhr, textStatus, error) {
      alert("Error");
      }
      });
  })
});