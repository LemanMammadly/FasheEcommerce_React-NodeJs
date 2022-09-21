import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'
import Iframe from 'react-iframe'

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact';
      });
    const history=useNavigate()

    const [inputs,setInputs]=useState({
        email:'',
        message:''
    }) 

    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history('/contact'));
        window.location.reload()
    }

    const sendRequest=async()=>{
        await axios.post('http://localhost:5000/message',{
            email: String(inputs.email),
            message:String(inputs.message),
        }).then(res=>res.data)
    }



    const[adress,setAdress]=useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/adress')
          .then(res => setAdress(res.data.adress)) 
          .catch(error => console.log(error))
      },[])

  return (
    <div className='allcontact'>
        <section id='contact-title'>
          <h1 className='text-center text-title'>Contact</h1>
        </section>
        <section id='contact-main'>
            <div className="container">
                <div className="row">
                    <div className="alladressdiv row">
                    <div className="col-lg-6 all">
                        <form onSubmit={handleSubmit}>
                            <h4 className='text-center my-5'>Send Us a Message</h4>
                            <div className="inputs col-lg-9 m-auto">
                                <div className="email">
                                    <i class="fa-regular fa-envelope"></i>
                                    <input type="email" placeholder='Your Email Adress' value={inputs.email} onChange={handleChange} name='email'  id="email"/>
                                </div>
                                <div className="message">
                                    <textarea name="message" id="message" cols="48" rows="7" placeholder='How Can We Help?' value={inputs.message} onChange={handleChange} ></textarea>
                                </div>
                                <div className="btns">
                                <button className='btn'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 all">
                    { adress && adress.map((adresses)=>(
                        <div className="alldiv">
                        <div className="adress adressesall">
                        <i class="fa-solid fa-location-dot"></i>
                        <div className="right">
                        <span>Adress</span>
                        <p>{adresses.adress}</p>
                        </div>
                        </div>
                        <div className="phone adressesall">
                        <i class="fa-solid fa-phone"></i>
                        <div className="right">
                        <span>Let's Talk</span>
                        <p className='bluetext'>
                        <a href={`tel:${adresses.phone}`}>{adresses.phone}</a>
                        </p>
                        </div>
                        </div>
                        <div className="mail adressesall">
                        <i class="fa-regular fa-envelope"></i>
                        <div className="right">
                        <span>Sale Support</span>
                        <p className='bluetext'>
                        <a href={`mailto:${adresses.mail}`}>{adresses.mail}</a>
                        </p>
                        </div>
                        </div>
                        </div>
                    ))
                    }
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='map'>
        <Iframe src="https://www.google.com/maps/d/u/0/embed?mid=1iITZr1LsK5EL5WUSon3ZwAJ5VO3vTOc&ehbc=2E312F" width="100%" height="500"></Iframe>
        </section>
    </div>
  )
}

export default Contact