import React from 'react'

export default function Book({ title, pages, genre, cover, synopsis, year, ISBN, author }) {
  return (
    <div>
      <h1>
        {title}
      </h1>
    </div>
  )
}
