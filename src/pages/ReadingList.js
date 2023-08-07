import React, { useState, useEffect } from 'react'
import Header from '../layouts/Header'
import Tabs from '../layouts/Tabs'
import getAllBooks from '../services/getAllBooks'
import useBooks from '../hooks/useBooks'
import BooksContext from '../context/BooksContext'

export default function ReadingList() {
  const [allBooks, setAllBooks] = useState([])
  const [booksAvailable, readingList, setReadingList] = useBooks(allBooks)

  useEffect(() => {
    getAllBooks()
      .then((data) => {
        return data.library
      })
      .then(data => {
        const ids = data.map((el) => {
          return el.book.ISBN
        })
        setAllBooks(ids)
      })
  }, [])

  return (
    <BooksContext.Provider value={{booksAvailable, readingList, setReadingList}}>
      <Header />
      <Tabs />
    </BooksContext.Provider>
  )
}
