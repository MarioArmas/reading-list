import React from 'react'
import List from '../components/List'

export default function Tabs({ booksAvailable, readingList }) {
  return (
    <div>
      <button>Libros disponibles ({booksAvailable.length})</button>
      <button>Lista de lectura ({readingList.length})</button>
      
      <List elements={booksAvailable} />
      <List elements={readingList} />
    </div>
  )
}