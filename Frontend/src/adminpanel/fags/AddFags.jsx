import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBarDrop from '../../components/SideBarDropdown/SideBarDrop'
import "./AddFags.css"

const AddFags = () => {
    const history=useNavigate()

    const [inputs,setInputs]=useState({
        question:'',
        answer:'',
        fag_id:''
    }) 

    const sendRequest=async()=>{
        await axios.post('http://localhost:5000/fags',{
            question: String(inputs.question),
            answer: String(inputs.answer),
            fag_id:String(inputs.fag_id)
        }).then(res=>res.data)
    }

    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history('/addfags'));
        window.location.reload();
    }
  return (
    <div className='row justify-content-center'>
    <div className="col-lg-2">
      <SideBarDrop/>
    </div>
    <div className="container addFags col-lg-4">
        <form onSubmit={handleSubmit} className="content">
            <h1 id="say-hello">Add Photos!</h1>
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
                <label for="fag_id">Id_Fag</label><br />
                <input value={inputs.fag_id} onChange={handleChange} name='fag_id' class="fld" placeholder="Enter fag_id" id="fag_id" />
            </div>
            </div>
            <button className="btn upd" type="submit">ADD</button>
        </form>
</div>
    
</div>
  )
}

export default AddFags
