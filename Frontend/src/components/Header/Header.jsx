import axios from 'axios';
import React, { useContext, useEffect, useState }  from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Cart } from '../Context/Context';
import Menu from '../Menu/Menu';
import './Header.css'

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
                        <NavLink className="blue" to="/sale">Sale</NavLink>
                        <NavLink to="/fags">FAQs</NavLink>
                        <NavLink to=".blog">Blog</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </div>
                {/* <div className="logsign col-lg-1">
                   { !isLoggedIn && <><NavLink to='/login'>LOGIN</NavLink>
                    <NavLink to='/signup'>SIGNUP</NavLink></> }
                 {isLoggedIn&& <NavLink to='/' onClick={handleLogout} >LOGOUT</NavLink>}{" "}
                </div> */}
                <div className="right col-lg-3 text-end col-5 col-sm-4 col-md-3 justify-content-between">
                    <i className="fa-solid fa-circle-user mx-4"></i>
                   {/* <i className="fa-solid fa-bag-shopping second bagicon">({cart.length})</i> */}
                   <NavLink to='/card'>
                   <i className="fa-solid fa-bag-shopping second bagicon"><p>{cart.length}</p></i>
                   </NavLink>
                    <div className="burgermenu">
                    <span className='material-icons menu-btn'
                    onClick={()=>setIsOpen(true)}><i class="fa-solid fa-bars"></i></span>
                    <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header