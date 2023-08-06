import React from 'react'
import Book from './Book'

export default function List({elements}) {
  return (
    <section className='my-10'>
      <ul>
        {
          elements.map((el) => {
            return <li>
              <Book bookData={el.book} key={el.book.ISBN} />
            </li>
          })
        }
      </ul>
    </section>
  )
}
