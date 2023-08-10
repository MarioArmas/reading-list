import fetchAllBooks from '../services/fetchAllBooks';

export default async function getGenres() {
  const {library} = await fetchAllBooks()
  
  const genres = library.map(({book}) => {
    return book.genre
  })

  return [...new Set(genres)]
}