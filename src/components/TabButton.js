import React from 'react'

export default function TabButton({ text, onClick, isActive }) {
  const classAttributtes = isActive ? 'border-black border-b-2' : 'text-gray-300'
  
  return (
    <button
      className={'text-lg sm:mr-12 py-3 hover:text-black max-sm:text-sm ' + classAttributtes} onClick={onClick}
    >
      {text}
    </button>
  )
}
