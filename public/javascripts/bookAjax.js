$(document).ready( function(){
  const endopoint = window.location.pathname
  $.ajax({
    url: `http://localhost:3000/api${endopoint}`,
    success: function(result){
      makeBookPage(result)
    }
  })
})
