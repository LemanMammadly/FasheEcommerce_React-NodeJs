import axios from 'axios';
import React, { useContext, useEffect, useState }  from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Cart } from '../Context/Context';
import Menu from '../Menu/Menu';
import './Header.css'
import {FiLogIn} from "react-icons/fi"
import {BiUserCircle} from "react-icons/bi"
import {AiOutlineShopping} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
   
    const {cart}=useContext(Cart)
    const [isOpen,setIsOpen]=useState(false)
    const[logo,setLogo]=useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/logo')
          .then(res => setLogo(res.data.logos)) 
          .catch(error => console.log(error))
      },[])


    const { pathname } = useLocation();
    if (pathname === "/admin") return null;
    else if (pathname === "/sliderDetail") return null;
    else if (pathname === "/addSlider") return null;
    else if (pathname === "/updateSlider") return null;
    else if (pathname === '/addphotos') return null;
    else if (pathname === '/photosDetail') return null;
    else if (pathname === '/addproducts') return null;
    else if (pathname === '/productdetail') return null;
    else if (pathname === '/productdetail') return null;
    else if (pathname === '/addInstagram') return null;
    else if (pathname === '/instagramdetail') return null;
    else if (pathname === '/logodetail') return null;
    else if (pathname === '/settingdetail') return null;
    else if (pathname === '/adressDetail') return null;
    else if (pathname === '/messageDetail') return null;
    else if (pathname === '/addfags') return null;
    else if (pathname === '/fagsDetail') return null;




  return (
    <header>
        <div className="container">
            <div className="row all py-3 justify-content-between">
                <div className="left col-lg-2 col-5">
                {logo && logo.slice(0,1).map((logos)=>(
                    <NavLink to={'/'}>
                        <img className='img-fluid' src={logos.logo} alt="" />
                    </NavLink>
                ))}
                </div>
                <div className="row center col-lg-6 text-end">
                    <div className="all-link">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/shoppage">Shop</NavLink>
                        <NavLink to="/fags">FAQs</NavLink>
                        <NavLink to=".blog">Blog</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </div>
                <div className="right col-lg-3 text-end col-3 col-sm-4 col-md-3 justify-content-between">
                    <NavLink to="/login" className="icon user">
                        <FiLogIn/>
                    </NavLink>
                    <NavLink to="/signup" className="icon user">
                        <BiUserCircle/>
                    </NavLink>
                   <NavLink to='/card' className='shop icon'>
                        <AiOutlineShopping/> <p>{cart.length}</p>
                   </NavLink>
                   <div className="burgermenu">
                    <span className='material-icons menu-btn'
                    onClick={()=>setIsOpen(true)}><GiHamburgerMenu className='burgermenu'/> </span>
                    <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header