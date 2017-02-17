const pgp = require('pg-promise')()
const fs = require('fs')

if(fs.existsSync('.env')) {
  require('dotenv').config()
}
const conectionString = process.env.DATABASE_URL
const db = pgp(conectionString)


const GET_ALL = "SELECT book.*, author.author_name, genre.book_genre FROM book JOIN author ON author_id=author.id JOIN genre ON genre_id=genre.id ORDER BY book.id ASC"
const GET_ONE = "SELECT book.*, author.author_name, genre.book_genre FROM book JOIN author ON author_id=author.id JOIN genre ON genre_id=genre.id WHERE book.id = $1"
const DELETE_BOOK = "DELETE FROM book WHERE id = $1"
const ADD_BOOK = "INSERT INTO book (title, description) VALUES ('$1', '$2') returning *;"
const SEARCH_BY_TITLE = "SELECT * FROM book WHERE title LIKE '%$1%'"
const UPDATE_BOOK_TITLE = `UPDATE book SET title=$3 WHERE id=$1;`
const UPDATE_BOOK_DESCRIPTION = `UPDATE book SET description=$3 WHERE id=$1;`

const Books = {
  getAll: () => db.any(GET_ALL),
  getById: (id) => db.one(GET_ONE, [id]),
  deleteOne: (id) => db.none(DELETE_BOOK, [id]),
  add: (title, description) => db.one(ADD_BOOK, [title, description]),
  search: (term) => db.any(SEARCH_BY_TITLE, [term])
  update: (id, column, data) => {
    if( column === 'title') {
      return db.none(UPDATE_BOOK_TITLE, [id, column, data])
    } else {
      return db.none(UPDATE_BOOK_DESCRIPTION, [id, column, data])
    }
  }
}

module.exports = Books
