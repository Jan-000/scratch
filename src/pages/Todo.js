import React from 'react'
import { Link } from 'react-router-dom'

export default function Todo({ todo }) {
  
  
  return (
    <div>
        <strong>from:</strong> {todo.fromStation} → <strong>to:</strong> {todo.toStation} todopage
        
    </div>
  )
}
