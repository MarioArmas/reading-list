import fetchAllBooks from '../services/fetchAllBooks'

export default async function getBookByISBN(ISBN) {
  const book = await fetchAllBooks()
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