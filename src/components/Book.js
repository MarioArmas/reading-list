import React, { useEffect, useState, useContext } from 'react'
import getBookByISBN from '../utils/getBookByISBN'
import BooksContext from '../context/BooksContext'
import { HeartIcon } from './Icons'

export default function Book({ ISBN, isReadingList }) {
  const [bookData, setBookData] = useState()
  const [isDisabled, setIsDisabled] = useState(false)
  const [hover, setHover] = useState(false)
  const { setReadingList } = useContext(BooksContext)

  useEffect(() => {
    getBookByISBN(ISBN)
      .then((data) => {
        setBookData(data.book)
      })
  },[ISBN])

  const handleClick = () => {
    setIsDisabled(true)
    isReadingList
    ? setReadingList((prev) => prev.filter(el => el !== ISBN))
    : setReadingList((prev) => [...new Set([...prev, ISBN])])
    setIsDisabled(false)
  }

  return bookData ? (
    <div
      className='relative p-1 m-1 bg-gray-100'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className='h-3/4 w-full object-cover' src={bookData.cover} alt={bookData.title} />
      <span className='absolute rounded-full px-4 py-1 bottom-1/4 left-0 bg-green-100 m-2'>
        {bookData.genre}
      </span>
      {
        hover ?
        <div className='absolute w-full h-3/4 top-0 left-0 bg-gray-100 opacity-90 p-4 transition-all translate-y-0 ease-in'>
          <p>
            {bookData.synopsis}
          </p>
        </div>
        : null
      }
      <div className='my-auto flex flex-col justify-center items-left p-2 mt-3'>
        <h1 className='text-sm font-bold'>
          {bookData.title}
        </h1>
        <h2 className='text-sm'>
          {bookData.author.name}
        </h2>
      </div>
      <HeartIcon
        className='absolute right-0 bottom-0 m-3 text-xl text-green-300 cursor-pointer hover:opacity-50'
        onClick={handleClick}
        disabled={isDisabled}
        fill={isReadingList ? '' : 'evenodd'}
      />
    </div>
  ) : null
}
