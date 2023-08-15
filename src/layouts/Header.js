import React, { useContext, useRef } from 'react'
import BooksContext from '../context/BooksContext'

export default function Header() {
  const { setGenreFilter, allGenres } = useContext(BooksContext)
  const inputRef = useRef()

  return (
    <header className='sm:py-16 max-sm:my-8 relative max-sm:flex max-sm:flex-col max-sm:justify-evenly max-sm:items-center max-sm:h-40'>
      <h1 className='text-4xl font-bold'>Librería</h1>
      <input
        className='sm:absolute right-0 bg-gray-100 py-2 px-4'
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
