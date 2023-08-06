import React, { useState, useEffect } from 'react'
import Header from '../layouts/Header'
import Tabs from '../layouts/Tabs'
import getBooks from '../services/fetch'
import useLocalStorage from '../hooks/useLocalStorage'

export default function ReadingList() {
  const [booksAvailable, setBooksAvailable] = useState([])
  const [readingList, setReadingList] = useState([])
  const [localStorage, setLocalStorage] = useLocalStorage('books', [])

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooksAvailable(data.library)
      })
  }, [])

  return (
    <div className=''>
      <Header />
      <Tabs booksAvailable={booksAvailable} readingList={readingList} />
    </div>
  )
}
