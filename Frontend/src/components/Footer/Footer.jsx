import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const[settings,setSettings]=useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/setting')
          .then(res => setSettings(res.data.settings)) 
          .catch(error => console.log(error))
      },[])

    const { pathname } = useLocation();
    if (pathname === "/admin") return null;
    if (pathname === "/addSlider") return null;
    if (pathname === "/sliderDetail") return null;
    if (pathname === "/sliderDetail") return null;
    if (pathname === '/updateSlider/:id') return null;
    if (pathname === '/addphotos') return null;
    if (pathname === '/photosDetail') return null;
    if (pathname === '/addproducts') return null;
    if (pathname === '/productdetail') return null;
    if (pathname === '/addInstagram') return null;
    if (pathname === '/instagramdetail') return null;
    if (pathname === '/logodetail') return null;
    if (pathname === '/settingdetail') return null;
    if (pathname === '/adressDetail') return null;
    if (pathname === '/messageDetail') return null;
    if (pathname === '/addfags') return null;
    if (pathname === '/fagsDetail') return null;





  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="top row justify-content-between align-items-center">
                    <div className="touch col-lg-4">
                        <h4>GET IN TOUCH</h4>
                        {settings&&settings.map((settingss)=>(
                        <div className="row all-links">
                                <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+994) {settingss.phone}</p>
                                    <div>
                                        <a href="https://www.facebook.com/" target="blank"><i className={settingss.icon1}></i></a>
                                        <a href="https://www.instagram.com/" target="blank"><i className={settingss.icon2}></i></a>
                                        <a href="https://www.pinterest.com/" target="blank"><i className={settingss.icon3}></i></a>
                                        <a href="https://www.snapchat.com/" target="blank"><i className={settingss.icon4}></i></a>
                                        <a href="https://www.youtube.com/" target="blank"><i className={settingss.icon5}></i></a>
                                    </div>
                            </div>
                        ))}
                       
                    </div>
                    <div className="categories col-lg-1">
                        <h4>CATEGORIES</h4>
                        <div className="row all-links">
                            <NavLink to='/shoppage'>Men</NavLink>
                            <NavLink to='/shoppage'>Women</NavLink>
                            <NavLink to='/shoppage'>Dresses</NavLink>
                            <NavLink to='/shoppage'>Sunglasses</NavLink>
                        </div>
                    </div>
                    <div className="links col-lg-1">
                            <h4>LINKS</h4>
                            <div className="all-links row">
                            <a href="/">Search</a>
                            <NavLink to='/about'>About Us</NavLink>
                            <NavLink to='/contact'>Contact Us</NavLink>
                            <a href="/">Returns</a>
                            </div>
                    </div>
                    <div className="newsletter col-lg-3">
                     <h4>NEWSLETTER</h4>
                     <div className="row all-links">
                        <input type="text" placeholder='email@example.com' />
                        <button className='btnn'>SUBSCRIBE</button>
                     </div>
                    </div>
                </div>
                <div className="bottom text-center">
                    <div className="img">
                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/xpaypal.png.pagespeed.ic.5IRC94FTgA.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/xvisa.png.pagespeed.ic.JL9CL229f9.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/xmastercard.png.pagespeed.ic.TeTk-UB0H_.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/xexpress.png.pagespeed.ic.BytsYpfna2.webp" alt="" />
                        <img src="https://preview.colorlib.com/theme/fashe/images/icons/xdiscover.png.pagespeed.ic.CT7I1GD_bQ.webp" alt="" />
                    </div>
                    <div className="text">
                    Copyright © 2022 Colorlib. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer