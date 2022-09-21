import React, { useEffect } from 'react'
import "../adminpanel/Admin.css"
import png from './../assets/dasssshh.png'
import SideBarDrop from '../components/SideBarDropdown/SideBarDrop'

const Admins = () => {
  useEffect(() => {
    document.title = 'Admin Panel';
  });
  return (
    <div className='admin'>
       <div className="col-lg-2">
       {/* <Sidebar/> */}
       <SideBarDrop/>
       </div>
       <div className="col-lg-9 text-end">
        <img className='png' src={png} alt="dasboard" />
       </div>
    </div>
  )
}

export default Admins
