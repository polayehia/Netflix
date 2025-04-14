import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='text-white h-screen flex justify-center items-center flex-col'>
        
        <h4>NotFound</h4>
        <Link to='/'>
        <h2 className='text-red-600 font-bold text-5xl'>go back</h2>
        
        </Link>
        </div>
  )
}
