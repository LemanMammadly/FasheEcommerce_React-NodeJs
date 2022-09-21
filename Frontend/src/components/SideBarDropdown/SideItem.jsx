import React, { useState } from 'react'

const SideItem = ({items}) => {
    const {name,links,open}=items;
    const [isOpen,setOpen]=useState(open)

    const openSideNav=()=>{
        setOpen(!isOpen)
    }
  return (
    <div onClick={()=>openSideNav()} style={sideItemStyle}>
      <p style={nameStyle}>{name}</p>
      {isOpen&&links.map((link,index)=>{
        const {title,to}=link;
        return(
            <div key={index} style={linkContainerStyle}>
                <a href={to} style={linkStyle}>
                    <p style={nameStyle}>{title}</p>
                </a>
            </div>
        )
      })}
    </div>
  )
}


const nameStyle={
    margin:"25px",
    fontWeight:"500",
    cursor:"pointer"
}

const sideItemStyle={
    height:"auto",
    minHeight:"60px",
    width:"259px",
    color:"#fff",
    display:"flex",
    alignItems:"flex-start",
    flexDirection:"column",
   
}

const linkContainerStyle={
    height:"auto",
    width:"259px",
    backgroundImage:"linear-gradient(90deg, rgb(46, 43, 46), rgb(50, 50, 50), rgb(9, 9, 9))",
    border:"1px solid #000"
    
}

const linkStyle={
    textDecoration:"none",
    color:"#fff"
}

export default SideItem
