$(document).ready( function(){
  $.ajax({
    url: 'http://localhost:3000/api',
    success: function(result){
      console.log('result:', result)
      makeBookTable(result)
    }
  })

  $('div').on('click', '.book-title', function(event){
    let currentData = $(event.target).text()
    let modifiedDOMElem = $(event.target)
    console.log('currentData:', currentData.trim())
    modifiedDOMElem = modifiedDOMElem.replaceWith(`<textarea class='book-title'>${currentData}</textarea>`)
    console.log('modifiedDOMElem', modifiedDOMElem)
    $('.book-title').focus()
  })
})
