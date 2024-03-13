import React from 'react'
import Search from './Search'

const Navbar = () => {
  return (
    <div className='py-3 fixed top-0 w-full bg-red-300 flex flex-col items-center gap-3 md:flex-row md:justify-around'>
        <h1 className='text-2xl font-bold'>Beers World 🍺</h1>
        <Search/>
    </div>
  )
}

export default Navbar