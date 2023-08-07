import React from 'react'
import Book from './Book'

export default function List({ elements, isReadingList }) {
  return (
    <section className='my-10'>
      <ul>
        {
          elements.map((el) => {
            return <Book ISBN={el} key={el} isReadingList={isReadingList} />
          })
        }
      </ul>
    </section>
  )
}
