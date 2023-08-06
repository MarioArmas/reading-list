import React from 'react'

export default function Book({ bookData }) {
  const { title, pages, genre, cover, synopsis, year, ISBN, author } = bookData

  return (
    <div className=''>
      <img src={cover} alt={title} />
      <h1 className='text-lg font-bold'>
        {title}
      </h1>
    </div>
  )
}
