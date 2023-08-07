import React, { useEffect, useState, useContext } from 'react'
import getBookByISBN from '../utils/getBookByISBN'
import BooksContext from '../context/BooksContext'

export default function Book({ ISBN, isReadingList }) {
  const [bookData, setBookData] = useState()
  const { setReadingList } = useContext(BooksContext)

  useEffect(() => {
    getBookByISBN(ISBN)
      .then((data) => {
        setBookData(data.book)
      })
  },[ISBN])

  return bookData ? (
    <div className=''>
      <img src={bookData?.cover} alt={bookData?.title} onClick={() => {
          isReadingList
          ? setReadingList((prev) => prev.filter(el => el !== ISBN))
          : setReadingList((prev) => [...new Set([...prev, ISBN])])
        }} />
      <h1 className='text-lg font-bold'>
        {bookData?.title}
      </h1>
    </div>
  ) : null
}
