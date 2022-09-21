import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Fag.css"

const Fag = () => {
    useEffect(() => {
        document.title = 'FAQs';
      });
    const[fags,setFags]=useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/fags')
          .then(res => setFags(res.data.fags)) 
          .catch(error => console.log(error))
      },[])

  return (
    <section id="fag">
        <div className="container">
            <div className="all">
                <h2 id="return">Frequently Asked Questions</h2>
               
                <div className="all">
                    <div className="question">
                    <h5>Questions</h5>
                    <ul>
                    { fags && fags.map((fagss)=>(
                 
                        <li><a href={`#${fagss.fag_id}`}>{fagss.question}</a></li>
                   
                        ))
                    }
                     </ul>
                 </div>
                <div className="answer">
                <h5>Answers</h5>
                { fags && fags.map((fagss)=>(
                    <div className="allans">
                    <p id={fagss.fag_id} className="anchor">Q: <span>{fagss.question}</span></p>
                    <p className='ans' id={fagss.fag_id}>A: {fagss.answer}</p>
                   <a href="#return" className='top'>Return to Top</a>
                   <hr />
                    </div>
                   ))
                    }
                </div>
                </div>
              
             
            </div>
        </div>
    </section>
  )
}

export default Fag
