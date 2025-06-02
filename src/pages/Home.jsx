import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../componants/ProductCard'
import Navbar from '../componants/Navbar'
const Home = () => {
const [products,setProducts] = useState([])
const [filteredProduct, setFilteredProduct] = useState([])
    const getProducts = async ()=>{

    const response = await axios.get('/products.json')
setProducts(response.data)
console.log(response.data);
setFilteredProduct(response.data)

  } 
  const filter = (e)=>{
    const filteredCards = products.filter((prods) =>{
      return prods.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredProduct(filteredCards)
  }
  const filterCat = (e)=>{
    if(e.target.value == 'all'){
      return setFilteredProduct(products)
    }
    const filteredCat = products.filter((prods)=>{
      return prods.category == e.target.value
    })
    setFilteredProduct(filteredCat)
    console.log(e.target.value);
  }
  useEffect(()=>{
    getProducts()
    
  },[]) 
  return (
    <div >
      <Navbar category={filterCat} search={filter}/>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 lg:grid-cols-4 gap-3 p-4 mt-5'>{filteredProduct.map((prods)=>{
        return <ProductCard key={prods.id} product={prods} />
    })}</div>
    </div>
  )
}

export default Home