import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'
import "./UpdateFags.css"

const UpdateFags = () => {
    const history=useNavigate()

    const [inputs,setInputs] = useState({}) 

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/fags/${id}`)
            .then(res=>res.data)
            .then(data=>setInputs(data.fag))
        }
            fetchHandler();
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history('/admin'));
    }
    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/fags/${id}`,{
            question : String(inputs.question),
            answer : String(inputs.answer),
            fag_id : String(inputs.fag_id)
        }).then(res => res.data.fag)
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
    <div className="container updatefags col-lg-4">
        <form onSubmit={handleSubmit} className="content">
            <h1 id="say-hello">Update FAQs!</h1>
            <div>
            <div className="question">
                <label for="question">Question</label><br />
                <input value={inputs.question} onChange={handleChange} name='question' class="fld" placeholder="Enter question" id="question" />
            </div>
            <div className="answer">
                <label for="answer">Answer</label><br />
                <input value={inputs.answer} onChange={handleChange} name='answer' class="fld" placeholder="Enter answer" id="answer" />
            </div>
            <div className="fag_id">
                <label for="fag_id">FAQ_id</label><br />
                <input value={inputs.fag_id} onChange={handleChange} name='fag_id' class="fld" placeholder="Enter fag_id" id="fag_id" />
            </div>
            </div>
            <button className="btn upd" type="submit">UPDATE</button>
        </form>
</div>
    
</div>
  )
}

export default UpdateFags
