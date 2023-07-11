$(document).ready(function(){
  $("#submitID").click(function(){

$.ajax({
  url: 'http:/localhost:8080/api/student/student/deleteid/' + $('#searchID').val(),
  type: 'delete',
  
  success: function (data, textStatus, jQxhr) {
  
    alert("Successfully deleted");
  },
  error: function (jqXhr, textStatus, errorThrown) {
  console.log(errorThrown);
  }
  })
})
$("#submitEmail").click(function(){

  $.ajax({
    url: 'http:/localhost:8080/api/student/student/deleteid/' + $('#searchEmail').val(),
    type: 'delete',
    
    success: function (data, textStatus, jQxhr) {
    
      alert("Successfully deleted");
    },
    error: function (jqXhr, textStatus, errorThrown) {
    console.log(errorThrown);
    }
    })
  })
})

  