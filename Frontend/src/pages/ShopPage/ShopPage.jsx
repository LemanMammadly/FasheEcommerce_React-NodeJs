import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ShopPage.css";

const ShopPage = () => {
    const[tempdata,setTempdata]=useState([])
    const [search, setSearch] = useState("")

    const searchHandler = (e) => {
        setSearch(e.target.value)
    }

  
    const getData=(image,title,price)=>{
      let tempData=[image,title,price]
      setTempdata(item=> [1, ...tempData ])  
    }
    const[product,setProducts]=useState([])
    const[visible,setVisible]=useState(12)

    const showMoreItems=()=>{
        setVisible(prevValue=>prevValue+12)
    }

    const filteredProducst = product.filter(products => products.title.toLowerCase().includes(search.toLowerCase()))   

  
    useEffect(() => {
      axios.get('http://localhost:5000/card')
        .then(res => setProducts(res.data.cards)) 
        .catch(error => console.log(error))
    },[])
  return (
    <div className="shoppage">
      <div className="container">
          <div className="top row">
            <div className="left col-lg-6">
              <a href="">All Products</a>
              <a href="">Women</a>
              <a href="">Men</a>
              <a href="">Bags</a>
              <a href="">Shoes</a>
              <a href="">Watches</a>
            </div>
            <div className="right col-lg-6 text-end">
             <p>
                <a
                  class="btn btn-light"
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                 <i class="fa-solid fa-arrow-down-wide-short mx-1"></i>
                  Filter
                </a>
                <button
                  class="btn btn-light mx-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#multiCollapseExample2"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample2"
                >
                 <i class="fa-solid fa-magnifying-glass mx-1"></i>
                  Search
                </button>
              </p>
              <div class="all">
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="multiCollapseExample1"
                  >
                    <div class="card card-body">
                     <div className="col-lg-12 row text-start">
                     <div className="first col-lg-3 row">
                        <h6 className="sort">Sort By</h6>
                        <a href="">Default</a>
                        <a href="">Popularity</a>
                        <a href="">Average rating</a>
                        <a href="">Newness</a>
                        <a href="">Price: Low to High</a>
                        <a href="">Price: High to Low</a>
                      </div>
                      <div className="second col-lg-3 row">
                        <h6 className="price">Price</h6>
                        <a href="">All</a>
                        <a href="">$0.00 - $50.00</a>
                        <a href="">$50.00 - $100.00</a>
                        <a href="">$100.00 - $150.00</a>
                        <a href="">$150.00 - $200.00</a>
                        <a href="">$200.00+</a>
                      </div>
                      <div className="third col-lg-3 row">
                        <h6 className="color">Color</h6>
                        <a href=""><i class="fa fa-circle" style={{color:"black"}}></i>Black</a>
                        <a href=""><i class="fa fa-circle" style={{color:"blue"}}></i>Blue</a>
                        <a href=""><i class="fa fa-circle" style={{color:"grey"}}></i>Grey</a>
                        <a href=""><i class="fa fa-circle" style={{color:"green"}}></i>Green</a>
                        <a href=""><i class="fa fa-circle" style={{color:"red"}}></i>Red</a>
                        <a href=""><i class="fa fa-circle" style={{color:"white"}}></i>White</a>
                      </div>
                      <div className="fourth col-lg-3 tags">
                        <h6 className="tagss">Tags</h6>
                        <a className="tag" href="">Fashion</a>
                        <a className="tag" href="">Lifestyle</a>
                        <a className="tag" href="">Denim</a>
                        <a className="tag" href="">Streetstyle</a>
                        <a className="tag" href="">Crafts</a>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="collapse multi-collapse"
                    id="multiCollapseExample2"
                  >
                    <div class="card card-body">
                      <div className="search text-start">
                        <i class="fa-solid fa-magnifying-glass mx-1"></i>
                        <input type="text" onChange={searchHandler} placeholder="Search" />  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             </div>
          </div>
          <div className="bottom"></div>
        </div>
    <section id='featured'>
    <div className="container">
      <div className="row justify-content-between">
        {filteredProducst&&filteredProducst.slice(0,visible).map((productss)=>(
          <div className="bottom all col-lg-3 mb-5">
          <div className="box">
          <div className="btm-img">
            <img className='img-fluid' src={productss.image} alt="" />
            <div className="btn">
              <NavLink to="/shoppage" onClick={()=>getData(productss.image, productss.title, productss.price)}>ADD TO CARD</NavLink>
            </div>
          </div>
          <div className="btm-text">
            <a href="/">{productss.title}</a>
            <span>{productss.price} AZN</span>
          </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </section> 
  <div className='loadmorediv'>
    <NavLink onClick={showMoreItems} className='loadmore' to='/shoppage'>LOAD MORE</NavLink>
  </div>
    </div>
  );
};

export default ShopPage;
