var stu = null;
$(document).ready(function(){
  $("#submitID").click(function(){
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
      type: 'PUT',
      url: 'http://localhost:8080/api/student/student/'+ $('#searchID').val(),
      contentType: 'application/json',
      data: student ,
      success: function (data, textStatus, jQxhr) {
      alert("successfully updated");
      },
      error: function (xhr, textStatus, error) {
      alert("Error");
      }
      });
  })
});