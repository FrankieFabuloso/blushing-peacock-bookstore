const pgp = require('pg-promise')()
const fs = require('fs')

if(fs.existsSync('.env')) {
  require('dotenv').config()
}
const conectionString = process.env.DATABASE_URL
const db = pgp(conectionString)


const GET_ALL = "SELECT * FROM book"
const DELETE_BOOK = "DELETE FROM book WHERE id = $1"


const Books = {
  getAll: () => db.any(GET_ALL),
  deleteOne: (id) => db.none(DELETE_BOOK, [id])
}

module.exports = Books
