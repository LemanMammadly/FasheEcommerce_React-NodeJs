import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop';
import "./FagsDetail.css"

const FagsDetail = () => {
        const history=useNavigate();
      
        const [fags , setFags] = useState([])
      
        const fags_arr = fags && fags.map(item => {
          return item._id
         })
      
         useEffect(() => {
          axios.get('http://localhost:5000/fags')
            .then(res => setFags(res.data.fags)) 
            .catch(error => console.log(error))
        } , [])
      
      
  return (
    <div>
    <div className='fagsdetail'>
   <div className="col-lg-3">
    <SideBarDrop/>
   </div>
       <table class="table table-image">
   {fags&&fags.map((fagss,id)=>(
       <tbody>
         <tr key={fagss.id}>
           <td>
               <p className='text'>{(fagss.question).slice(0,40)}...</p>
           </td>
           <td><p className='text'>{(fagss.answer).slice(0,30)}...</p></td>
           <td><p className='text'>{fagss.fag_id}</p></td>
           <td>
           <NavLink to={`/updateFags/${fags_arr[id]}`} onClick={async() => {
               await axios.put(`http://localhost:5000/fags/${fags_arr[id]}`)
               .then(res => res.data)
            }} className='btn btn1 ms-1 btnn'>Update</NavLink>
            <NavLink to={`/deleteFags/${fags_arr[id]}`} onClick={async()=>{
             await axios.delete(`http://localhost:5000/fags/${fags_arr[id]}`)
             .then(()=>history('/fagsDetail'))
            }} className='btn btn2 ms-2 btnn'>Delete</NavLink>
           </td>
         </tr>
       </tbody>
   ))}
     </table>   
 </div>
 </div>
  )
}

export default FagsDetail
