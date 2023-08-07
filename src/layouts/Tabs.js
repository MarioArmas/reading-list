import React, { useState, useContext } from 'react'
import List from '../components/List'
import TabButton from '../components/TabButton'
import BooksContext from '../context/BooksContext'

export default function Tabs() {
  const [isReadingBooks, setIsReadingbooks] = useState(false)
  const {booksAvailable, readingList} = useContext(BooksContext)

  return (
    <div>
      <TabButton
        text={`Libros disponibles (${booksAvailable.length})`}
        onClick={() => setIsReadingbooks(false)}
        isActive={!isReadingBooks}
        />
      <TabButton
        text={`Lista de lectura (${readingList.length})`}
        onClick={() => setIsReadingbooks(true)}
        isActive={isReadingBooks}
      />
      
      {
        isReadingBooks
        ? <List elements={readingList} isReadingList={true} />
        : <List elements={booksAvailable} isReadingList={false} />
      }
    </div>
  )
}