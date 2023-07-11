$(document).ready(function(){
  $("#searchID").click(function(){

$.ajax({
  url: 'http:/localhost:8080/api/student/student/sid/' + $('#search1').val(),
  type: 'get',
    contentType: 'application/json',
    dataType: "json",
    success: function (data, textStatus, jQxhr) {
    let text = "<ul>";
    	    
		text += "First Name: " + data.firstName + "<br>Last Name: " + data.lastName + "<br>DOB: " + data.dateOfBirth + "<br>Email: " +data.email + "<br>Student ID: "+data.sid + "<br>Center: " + data.center + "<br>Semester: " + data.Semester + "<br>CGPA: " + data.Cgpa;        
    
		text += "</ul>";
		document.getElementById("demo").innerHTML = text;
    },
    error: function (jqXhr, textStatus, errorThrown) {
    console.log(errorThrown);
    }
    })
  })
})

$(document).ready(function(){

$("#searchName").click(function(){

  $.ajax({
    url: 'http:/localhost:8080/api/student/student/firstname/' + $('#search2').val(),
    type: 'get',
    contentType: 'application/json',
    dataType: "json",
    success: function (data, textStatus, jQxhr) {
    let text = "<ul>";
    	    
		text += "First Name: " + data.firstName + "<br>Last Name: " + data.lastName + "<br>DOB: " + data.dateOfBirth + "<br>Email: " +data.email + "<br>Student ID: "+data.sid + "<br>Center: " + data.center + "<br>Semester: " + data.Semester + "<br>CGPA: " + data.Cgpa;        
    
		text += "</ul>";
		document.getElementById("demo").innerHTML = text;
    },
    error: function (jqXhr, textStatus, errorThrown) {
    console.log(errorThrown);
    }
    })
  })

})
$(document).ready(function(){

$("#searchCenter").click(function(){

  $.ajax({
    url: 'http:/localhost:8080/api/student/student/center/' + $('#search3').val(),
    type: 'get',
    contentType: 'application/json',
    dataType: "json",
    success: function (data, textStatus, jQxhr) {
    let text = "<ul>";
    	    
		text += "First Name: " + data.firstName + "<br>Last Name: " + data.lastName + "<br>DOB: " + data.dateOfBirth + "<br>Email: " +data.email + "<br>Student ID: "+data.sid + "<br>Center: " + data.center + "<br>Semester: " + data.Semester + "<br>CGPA: " + data.Cgpa;        
    
		text += "</ul>";
		document.getElementById("demo").innerHTML = text;
    },
    error: function (jqXhr, textStatus, errorThrown) {
    console.log(errorThrown);
    }
    })
  })

})
$(document).ready(function(){

$("#searchSemester").click(function(){

  $.ajax({
    url: 'http:/localhost:8080/api/student/student/semester/' + $('#search4').val(),
    type: 'get',
    contentType: 'application/json',
    dataType: "json",
    success: function (data, textStatus, jQxhr) {
    let text = "<ul>";
    	    
		text += "First Name: " + data.firstName + "<br>Last Name: " + data.lastName + "<br>DOB: " + data.dateOfBirth + "<br>Email: " +data.email + "<br>Student ID: "+data.sid + "<br>Center: " + data.center + "<br>Semester: " + data.Semester + "<br>CGPA: " + data.Cgpa;        
    
		text += "</ul>";
		document.getElementById("demo").innerHTML = text;
    },
    error: function (jqXhr, textStatus, errorThrown) {
    console.log(errorThrown);
    }
    })
  })

})
$(document).ready(function(){

$("#searchCGPA").click(function(){

  $.ajax({
    url: 'http:/localhost:8080/api/student/student/cgpa/' + $('#search5').val(),
    type: 'get',
    contentType: 'application/json',
    dataType: "json",
    success: function (data, textStatus, jQxhr) {
    let text = "<ul>";
    	    
		text += "First Name: " + data.firstName + "<br>Last Name: " + data.lastName + "<br>DOB: " + data.dateOfBirth + "<br>Email: " +data.email + "<br>Student ID: "+data.sid + "<br>Center: " + data.center + "<br>Semester: " + data.Semester + "<br>CGPA: " + data.Cgpa;        
    
		text += "</ul>";
		document.getElementById("demo").innerHTML = text;
    },
    error: function (jqXhr, textStatus, errorThrown) {
    console.log(errorThrown);
    }
    })
  })

})

  