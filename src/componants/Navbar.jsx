import React from 'react'

const Navbar =  ({search, category}) => {
  return (
    <div className='flex flex-wrap justify-between items-center p-4 bg-gray-800 text-white w-full'>
         <input className='sm:w-auto w-full border rounded p-2' onInput={search} type="search" placeholder="Search a Product" />
         <h1 className='text-center font-bold text-4xl'> Products</h1>
     <select className='sm:w-auto w-full text-black bg-white p-2 rounded' onChange={category}  name="" id="">
        <option value="all">All</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="electronics">electronics</option>
        <option value="women's clothing">women's clothing</option>
      </select>

    </div>
  )
}


export default Navbar