import React, { useState, useEffect } from 'react'
import Header from '../layouts/Header'
import Tabs from '../layouts/Tabs'
import fetchAllBooks from '../services/fetchAllBooks'
import useBooks from '../hooks/useBooks'
import BooksContext from '../context/BooksContext'
import getGenres from '../utils/getGenres'

export default function ReadingList() {
  const [allBooks, setAllBooks] = useState([])
  const [booksAvailable, readingList, setReadingList] = useBooks(allBooks)
  const [genreFilter, setGenreFilter] = useState('')
  const [allGenres, setAllGenres] = useState([])

  useEffect(() => {
    getGenres()
      .then((data) => {
        setAllGenres(data)
      })
  }, [])

  useEffect(() => {
    fetchAllBooks()
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
    <BooksContext.Provider value={{booksAvailable, readingList, setReadingList, genreFilter, setGenreFilter, allGenres}}>
      <Header />
      <Tabs />
    </BooksContext.Provider>
  )
}
