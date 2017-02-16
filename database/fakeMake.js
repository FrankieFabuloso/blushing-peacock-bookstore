const faker = require('faker')
const fs = require('fs')


// const fakeMake = (table, length, attributes ) => {
//   attributes = attributes.reduce((memo, attribute) => memo=memo+'"'+attribute+'", ', '')
//   const SQLInsertString = `INSERT INTO "${table}" (${attributes})`
//   console.log('SQLInsertString:', SQLInsertString)
// }
//
//
//


const makeFakeBooks = () => {
  let SQLBookInsertIntoString = 'INSERT INTO "book" ("title", "description", "img_url", "author_id", "genre_id") values'
  let values = ''
  for( let i=0; i<50; i++ ){
    let title = '\''+faker.random.words(2)+'\''
    let description = '\''+faker.random.words(10)+'\''
    let img_url = '\''+faker.image.animals(250, 250, true)+'/'+i+'\''
    let author_id = '\''+Math.floor( (Math.random() * 9) + 1)+'\''
    let genre_id = '\''+Math.floor( (Math.random() * 9) + 1)+'\''
    values += SQLBookInsertIntoString+' ( '+title+', '+description+', '+img_url+', '+author_id+', '+genre_id+' ) ON CONFLICT DO NOTHING;\n'
  }
  return values
}

const makeFakeAuthors = () => {
  let values = ''
  let SQLAuthorInsertIntoString = 'INSERT INTO "author" ("author_name") values'
  for(let i=0; i<10; i++){
    let name = '\''+faker.name.findName()+'\''
    values += SQLAuthorInsertIntoString+' ( '+name+' ) ON CONFLICT DO NOTHING;\n'
  }
  return values
}

const makeFakeGenres = () => {
  let genres = [
    'Romance',
    'Horror',
    'Self-Help',
    'Fantasy',
    'Mystery',
    'Non-Fiction',
    'History',
    'Cooking',
    'Animal+Nature',
    'Science'
  ]
  let values = ''
  let SQLAuthorInsertIntoString = 'INSERT INTO "genre" ("book_genre") values'
  for(let i=0; i<10; i++){
    values += SQLAuthorInsertIntoString+' ( \''+genres[i]+'\' ) ON CONFLICT DO NOTHING;\n'
  }
  return values
}

const writeFakeDataToFile = () => {
  let values = ''
  values+= makeFakeAuthors() + makeFakeGenres() + makeFakeBooks()
  console.log('values:', values)
  fs.writeFileSync('./database/fakeMakeData.sql', values)
}

writeFakeDataToFile()
