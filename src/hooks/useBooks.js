import { useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export default function useBooks(allBooks) {
  const [localStorage, setLocalStorage] = useLocalStorage('books', [])
  const [availableBooks, setAvailableBooks] = useState(allBooks.filter(item => !localStorage.includes(item)))
  
  useEffect(() => {
    setAvailableBooks(allBooks.filter(item => !localStorage.includes(item)))
  }, [localStorage, allBooks])
  
  return [availableBooks, localStorage, setLocalStorage]
}