import React, { useEffect } from 'react'
import './Blog.css'

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog';
  });
  return (
    <div className='blog'>
        <div className="all">
          <div className="top">
            <span>A FASHION BLOG</span>
            <h1>PULL&BEAR</h1>
            <h2>CREATE YOUR OWN STYLE</h2>
          </div>
        </div>
        <div className="container">
        <div className="bottom row">
          <div className="left1 col-lg-7">
          </div>
          <div className="right col-lg-5">
            <div className="righttop">
              <span><i class="fa-solid fa-user" style={{color:"#F4BF2C"}}></i>ADMIN</span>
              <span><i class="fa-solid fa-calendar" style={{color:"#F4BF2C"}}></i>JAN.30,2022</span>
              <span style={{color:"#F4BF2C"}}><i class="fa-solid fa-comment" style={{color:"#F4BF2C"}}></i>3 COMMENTS</span>
            </div>
            <div className="bottom">
              <a className='header' href="">Writing A Novel with A Heart</a>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <a href="">LEARN MORE <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="bottom row">
          <div className="right col-lg-5">
            <div className="righttop">
              <span><i class="fa-solid fa-user" style={{color:"#F4BF2C"}}></i>ADMIN</span>
              <span><i class="fa-solid fa-calendar" style={{color:"#F4BF2C"}}></i>JAN.20,2022</span>
              <span style={{color:"#F4BF2C"}}><i class="fa-solid fa-comment" style={{color:"#F4BF2C"}}></i>12 COMMENTS</span>
            </div>
            <div className="bottom">
              <a className='header' href="">Writing A Novel with A Heart</a>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <a href="">LEARN MORE <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="left col-lg-7 text-end">
          </div>
        </div>
        <div className="bottom row">
          <div className="left3 col-lg-7">
          </div>
          <div className="right col-lg-5">
            <div className="righttop">
              <span><i class="fa-solid fa-user" style={{color:"#F4BF2C"}}></i>ADMIN</span>
              <span><i class="fa-solid fa-calendar" style={{color:"#F4BF2C"}}></i>JAN.30,2022</span>
              <span style={{color:"#F4BF2C"}}><i class="fa-solid fa-comment" style={{color:"#F4BF2C"}}></i>3 COMMENTS</span>
            </div>
            <div className="bottom">
              <a className='header' href="">Writing A Novel with A Heart</a>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <a href="">LEARN MORE <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="bottom row">
          <div className="right col-lg-5">
            <div className="righttop">
              <span><i class="fa-solid fa-user" style={{color:"#F4BF2C"}}></i>ADMIN</span>
              <span><i class="fa-solid fa-calendar" style={{color:"#F4BF2C"}}></i>JAN.20,2022</span>
              <span style={{color:"#F4BF2C"}}><i class="fa-solid fa-comment" style={{color:"#F4BF2C"}}></i>12 COMMENTS</span>
            </div>
            <div className="bottom">
              <a className='header' href="">Writing A Novel with A Heart</a>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <a href="">LEARN MORE <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="left4 col-lg-7">
          </div>
        </div>
        </div>
        </div>
        <div className="pages text-center">
          <a href=''><i class="fa-solid fa-angle-left"></i></a>
          <a href="" className='first'>1</a>
          <a href="">2</a>
          <a href="">3</a>
          <a href="">4</a>
          <a href="">5</a>
          <a href=''><i class="fa-solid fa-angle-right"></i></a>
        </div>
        <div className="bottompage text-center">
          <h2>Newsletter - Stay tune and get the latest update</h2>
          <p>Far far away, behind the word mountains</p>
          <div className="form form-group d-flex align-items-center col-lg-3">
            <input type="text" className='form-control' placeholder='Enter email adress'/>
            <button className='btn btn-dark'>SUBSCRIBE</button>
          </div>
        </div>
    </div>
  )
}

export default Blog
