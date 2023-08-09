import React from 'react'
import Book from './Book'

export default function List({ elements, isReadingList }) {
  return (
    <section className='my-10'>
      <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {
          elements.map((el) => {
            return <Book ISBN={el} key={el} isReadingList={isReadingList} />
          })
        }
      </ul>
    </section>
  )
}
