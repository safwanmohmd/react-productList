import React from 'react'

const Navbar =  ({search, category}) => {
  return (
    <div className='text-white flex justify-between rounded p-5 bg-gray-800'>
         <input className='border rounded p-2' onInput={search} type="search" placeholder="Search a Product" />
         <h1 className='font-bold text-4xl'> Products</h1>
     <select className='text-black bg-white p-2 rounded' onChange={category}  name="" id="">
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