import React from 'react'
import Book from './Book'

export default function List({elements}) {
  return (
    <ul>
      {
        elements.map((el) => {
          return <li>
            <Book title={el.book.title} key={el.book.ISBN} />
          </li>
        })
      }
    </ul>
  )
}
