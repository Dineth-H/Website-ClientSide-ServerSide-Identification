let sh=null;
$(document).ready(function(){
  $("#view").click(function(){
    $.ajax({
      url: 'http://localhost:8080/api/student',
      type: 'get',
      contentType: 'application/json',
      dataType: "json",
      crossDomain:true,
      success: function (data, textStatus, jQxhr) {
        sh=data;
      let text = "<ul>";
      for (let i = 0; i < data.length; i++) {
      text += "First Name: " + data[i].firstName + "<br> Last Name: " + data[i].lastName + " <br> DOB: " + data[i].dateOfBirth + " <br> Email: " +data[i].email + " <br> Student ID: "+data[i].sid + " <br> Center: " + data[i].center + " <br> Semester: " + data[i].Semester + " <br> CGPA: " + data[i].Cgpa +"<br><br>";         }
      text += "</ul>";
      document.getElementById("demo").innerHTML = text;
      },
      error: function (jqXhr, textStatus, errorThrown) {
      console.log(errorThrown);
      } });
    
  })
});

