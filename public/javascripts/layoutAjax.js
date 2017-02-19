$(document).ready( function(){
  $.ajax({
    url: 'http://localhost:3000/api',
    success: function(result){
      makeBookTable(result)
    }
  })
})
