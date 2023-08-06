import React from 'react'

export default function TabButton({ text, onClick, isActive }) {
  const classAttributtes = isActive ? 'border-black border-b-2' : 'text-gray-300'
  
  return (
    <button
      className={'text-lg mr-12 py-3 hover:text-black ' + classAttributtes} onClick={onClick}
    >
      {text}
    </button>
  )
}
