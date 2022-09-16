import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'
import './MessageDetail.css'

const MessageDetail = () => {
  const history=useNavigate();

    const [message , setMessage] = useState([])

    const message_arr = message && message.map(item => {
      return item._id
     })
  
     useEffect(() => {
      axios.get('http://localhost:5000/message')
        .then(res => setMessage(res.data.messagess)) 
        .catch(error => console.log(error))
    } , [])
  
  return (
    <div>
    <div className='messagedetail'>
   <div className="col-lg-3">
    <SideBarDrop/>
   </div>
       <table class="table table-image">
   {message&&message.map((messagess,id)=>(
       <tbody>
         <tr key={messagess.id}>
           <td><textarea cols="30" rows="4" disabled>{(messagess.message)}</textarea></td>
           <td><p className='text'>{(messagess.email)}</p></td>
           <td>
           <NavLink to={`/deleteMessage/${message_arr[id]}`} onClick={async()=>{
             await axios.delete(`http://localhost:5000/message/${message_arr[id]}`)
             .then(()=>history('/messageDetail'))
            }} className='btn btn2 ms-2'>Delete</NavLink>
           </td>
         </tr>
       </tbody>
   ))}
     </table>   
 </div>
 </div>
  )
}

export default MessageDetail
