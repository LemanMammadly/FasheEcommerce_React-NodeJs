import React from 'react'
import { items } from './MenuItems'
import './Menu.css'

const Menu = ({isOpen,onChange}) => {
  return (
    <div className={`menubar ${isOpen && "open"}`}>
      <span className='material-icons btnss'
      onClick={()=>onChange(false)}>X</span>
      <div className="menuitems">
        {items.map((item,index)=> <a href={item.itemLink} key={index}>
            {item.itemText}
        </a>)}
      </div>
    </div>
  )
}

export default Menu
