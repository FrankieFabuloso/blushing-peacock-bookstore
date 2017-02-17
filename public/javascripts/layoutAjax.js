$(document).ready( function(){
  $.ajax({
    url: 'http://localhost:3000/api',
    success: function(result){
      console.log('result:', result)
      makeBookTable(result)
    }
  })
})
