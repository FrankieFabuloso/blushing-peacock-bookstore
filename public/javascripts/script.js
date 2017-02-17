const makeBookTable = books => {
  for(let book of books){
    $(`<div class='book row row-${book.id}'>
        <div class='delete-button'>
          <button onClick='deleteBook(${book.id})'> </button>
        </div>
        <div class='col'>
          <a href='/book/${book.id}'>
            <img src='${book.img_url}' />
          </a>
          <div>
            <span>Author:</span> <span>${book.author_name}</span>
          </div>
          <div>
            <span>Genre:</span> <span>${book.book_genre}</span>
          </div>
        </div>
        <div class='col'>
          <span class='book-title'>${book.title}</span>
        </div>
        <div class='col book-description'>
          ${book.description}
        </div>
      </div>`).appendTo(".container")
  }
}

const makeBookPage = book => {
  $(`<div class='row align-items-center'>
      <div class='col-3 image-col'>
        <img src='${book.img_url}' />
        <div>
          <div class='author-name'> Author: ${book.author_name} </div>
          <div class='book-genre'> Genre: ${book.book_genre} </div>
        </div>
      </div>
      <div class='col'>
        <div class='row book-title-row'>
          <div class='col-2 title-col'>
            Title
          </div>
          <div onclick='toggleTextarea(${book.id}, "title")' class='col book-title-col'>
          ${book.title}
          </div>
        </div>
        <div class='row book-description-row'>
          <div class='col-2 description-col'>
            description:
          </div>
          <div onclick='toggleTextarea(${book.id}, "description")' class='col book-description-col'>
            ${book.description}
          </div>
        </div>
      </div>
    <div>`).appendTo(".container")
}


const toggleTextarea = (id, column) => {
  console.log('column:', column)
  const currentDOMElement = $(event.target)
  const currentDOMElementText = $(currentDOMElement).text()
  currentDOMElement.replaceWith(`
      <textarea onblur='updateData(${id}, "${column}")' autofocus rows='1' class='book-${column}-col'>
        ${currentDOMElementText.trim()}
      </textarea>`).focus()
}

const updateData = (id, column) => {
  console.log('column:', column)
  const currentDOMElement = $(event.target)
  const currentDOMElementText = $(currentDOMElement).val()
  currentDOMElement.replaceWith(`
      <div onclick='toggleTextarea(${id}, "${column}")' class='col book-${column}-col'>
        ${currentDOMElementText.trim()}
      </div>`);

  $.ajax({
    url: `http://localhost:3000/api`,
    method: 'PUT',
    data: {id:id, column:column, data:currentDOMElementText.trim()}
  })
}

const deleteBook = id =>{
  $(`.row-${id}`).empty()
  $(`.row-${id}`).remove()
  $.ajax({
    url: `http://localhost:3000/api/${id}`,
    method: 'DELETE'
  })
}
