const pgp = require('pg-promise')()
const fs = require('fs')

if(fs.existsSync('.env')) {
  require('dotenv').config()
}
const conectionString = process.env.DATABASE_URL
const db = pgp(conectionString)


const GET_ALL = "SELECT book.*, author.author_name, genre.book_genre FROM book JOIN author ON author_id=author.id JOIN genre ON genre_id=genre.id ORDER BY book.id ASC"
const DELETE_BOOK = "DELETE FROM book WHERE id = $1"
const ADD_BOOK = "INSERT INTO book (title, description) VALUES ('$1', '$2') returning *;"
const UPDATE_BOOK = "UPDATE book SET title='$1' WHERE id=$2;"
const SEARCH_BY_TITLE = "SELECT * FROM book WHERE title LIKE '%$1%'"

const Books = {
  getAll: () => db.any(GET_ALL),
  deleteOne: (id) => db.none(DELETE_BOOK, [id]),
  add: (title, description) => db.one(ADD_BOOK, [title, description]),
  update: (title, id) => db.none(UPDATE_BOOK, [title, id]),
  search: (term) => db.any(SEARCH_BY_TITLE, [term])
}

module.exports = Books
