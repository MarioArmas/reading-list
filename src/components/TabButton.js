import React from 'react'

export default function TabButton({ text, onClick, isActive }) {
  const classAttributtes = isActive ? 'border-green-300 border-b-4 font-semibold' : 'text-black hover:border-green-300 hover:border-b-2'
  
  return (
    <button
      className={'text-lg sm:mr-12 py-2 max-sm:text-sm ' + classAttributtes} onClick={onClick}
    >
      {text}
    </button>
  )
}
