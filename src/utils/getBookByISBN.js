import getAllBooks from '../services/getAllBooks'

export default async function getBookByISBN(ISBN) {
  const book = await getAllBooks()
    .then(data => {
      return data.library
    })
    .then(data => {
      return data.filter((el) => {
        return el.book.ISBN === ISBN ? el.book : null
      })[0]
    })
  
  return book
}