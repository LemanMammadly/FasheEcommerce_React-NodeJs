import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'
import './UpdateAdress.css'

const UpdateAdress = () => {
    const history=useNavigate()

    const [inputs,setInputs] = useState({}) 

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/adress/${id}`)
            .then(res=>res.data)
            .then(data=>setInputs(data.adresses))
        }
            fetchHandler();
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history('/admin'));
    }
    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/adress/${id}`,{
            adress : String(inputs.adress),
            phone : String(inputs.phone),
            mail : String(inputs.mail)
        }).then(res => res.data.adress)
    }
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

  return (
    <div className='row justify-content-center'>
    <div className="col-lg-2">
      <SideBarDrop/>
    </div>
    <div className="container updateAdress col-lg-4">
        <form onSubmit={handleSubmit} className="content">
            <h1 id="say-hello">Update Adress!</h1>
            <div>
            <div className="image">
                <label for="adress">Adress</label><br />
                <input value={inputs.adress} onChange={handleChange} name='adress' class="fld" placeholder="Enter adress" id="adress" />
            </div>
            <div className="message">
                <label for="phone">Phone</label><br />
                <input value={inputs.phone} onChange={handleChange} name='phone' class="fld" placeholder="Enter phone" id="phone" />
            </div>
            <div className="user">
                <label for="mail">Mail</label><br />
                <input value={inputs.mail} onChange={handleChange} name='mail' class="fld" placeholder="Enter mail" id="mail" />
            </div>
            </div>
            <button className="btn upd" type="submit">UPDATE</button>
        </form>
</div>
    
</div>
  )
}

export default UpdateAdress
