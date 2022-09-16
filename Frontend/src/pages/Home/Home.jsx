import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Slideer from '../../pages/Slideer/Slideer'
import Instagram from '../Instagram/Instagram'
import Lookbook from '../Lookbook/Lookbook'
import Photos from '../Photos/Photos'
import Product from '../Products/Product'
import '../Products/Product.css'



const Home = () => {
  const [cards , setCards] = useState([])

  useEffect(() => {
     axios.get('http://localhost:5000/card')
       .then(res => setCards(res.data.cards)) 
       .catch(error => console.log(error))
   } , [])


  return (
    <div>
      <Slideer/>
      <Photos/>
      <Product/>
      <Lookbook/>
      <Instagram/>
    </div>
  )
}

export default Home