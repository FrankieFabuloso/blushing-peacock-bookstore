const makeBookTable = books => {
  for(let book of books){
    $(`<div class='book row row-${book.id}'>
        <div class='delete-button'>
          <button onClick='deleteBook(${book.id})'> </button>
        </div>
        <div class='col'>
          <img src='${book.img_url}' />
          <div>
            <span>Author:</span> <span>${book.author_name}</span>
          </div>
          <div>
            <span>Genre:</span> <span>${book.book_genre}</span>
          </div>
        </div>
        <div onblur='update("title", ${book.id} )' class='col'>
          <span class='book-title'>${book.title}</span>
        </div>
        <div onblur='update("description", ${book.id} )' class='col book-description'>
          ${book.description}
        </div>
      </div>`).appendTo(".container")
  }
}

const deleteBook = id =>{
  $(`.row-${id}`).empty()
  $(`.row-${id}`).remove()
  $.ajax({
    url: `http://localhost:3000/api/${id}`,
    method: 'DELETE'
  })
}
