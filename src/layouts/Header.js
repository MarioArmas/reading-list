import React, { useContext, useRef } from 'react'
import BooksContext from '../context/BooksContext'

export default function Header() {
  const { setGenreFilter, allGenres } = useContext(BooksContext)
  const inputRef = useRef()

  return (
    <header className='py-16 relative'>
      <h1 className='text-4xl font-bold'>Librería</h1>
      <input
        className='absolute right-0 bg-gray-100 py-2 px-4'
        ref={inputRef}
        list='genre'
        name='genre'
        placeholder='Filtrar por género'
        onChange={() => setGenreFilter(inputRef.current.value)}
        onClick={() => {
          inputRef.current.value = ''
          setGenreFilter('')
        }}
      />
      <datalist id='genre'>
        {
          allGenres?.map((genre) => {
            return <option value={genre} key={genre}></option>
          })
        }
      </datalist>
    </header>
  )
}
