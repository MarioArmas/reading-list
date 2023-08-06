import React, { useState } from 'react'
import List from '../components/List'
import TabButton from '../components/TabButton'

export default function Tabs({ booksAvailable, readingList }) {
  const [isReadingBooks, setIsReadingbooks] = useState(false)

  return (
    <div>
      <TabButton
        text={`Libros disponibles (${booksAvailable.length})`}
        onClick={() => setIsReadingbooks(false)}
        isActive={!isReadingBooks}
        />
      <TabButton
        text={`Libros disponibles (${readingList.length})`}
        onClick={() => setIsReadingbooks(true)}
        isActive={isReadingBooks}
      />
      
      {
        isReadingBooks
        ? <List elements={readingList} />
        : <List elements={booksAvailable} />
      }
    </div>
  )
}