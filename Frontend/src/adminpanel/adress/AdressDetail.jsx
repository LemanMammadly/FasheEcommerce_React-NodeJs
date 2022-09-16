import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop';
import './AdressDetail.css'

const AdressDetail = () => {

  const [adress , setAdress] = useState([])

  const adress_arr = adress && adress.map(item => {
    return item._id
   })

   useEffect(() => {
    axios.get('http://localhost:5000/adress')
      .then(res => setAdress(res.data.adress)) 
      .catch(error => console.log(error))
  } , [])


  return (
    <div>
    <div className='adressdetail'>
   <div className="col-lg-3">
    <SideBarDrop/>
   </div>
       <table class="table table-image">
   {adress&&adress.map((adresses,id)=>(
       <tbody>
         <tr key={adresses.id}>
           <td class="w-25"><p className='text'>{(adresses.adress).slice(0,30)}...</p> </td>
           <td><p className='text text-center'>{(adresses.phone)}</p></td>
           <td><p className='text text-center'>{adresses.mail}</p></td>
           <td>
           <NavLink to={`/updateAdress/${adress_arr[id]}`} onClick={async() => {
               await axios.put(`http://localhost:5000/adress/${adress_arr[id]}`)
               .then(res => res.data)
            }} className='btn btn1 ms-1 btnn'>Update</NavLink>
           </td>
         </tr>
       </tbody>
   ))}
     </table>   
 </div>
 </div>
  )
}

export default AdressDetail
