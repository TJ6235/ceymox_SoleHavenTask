import React from 'react'
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import LandingShoe from '../assets/maincovershoes.png'
import newShoes from '../assets/newShoes.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css'



function PairDiscover() {
  return (
    <div>
     <div  className="row mt-5">
      <div id="discoverPairSection" className="ms-4 col-md-8 ms-4 shadow text-center mb-2">
      <div className='mt-5'>
    <p className="mainHead fw-bold">Step into Style</p>
    <p id='mainHeadSub' className="mainHead fw-bold">Discover <span className="yourText">Your</span></p>
    <p  id="perfectPairText" className="mainHead fw-bold">Perfect Pair</p>
</div>
<div className="d-flex justify-content-center align-items-center">
  <img className='mt-4 me-5' height={300} src={LandingShoe} alt=""/>
</div>
      </div>
      <div id='newArrivalWhole' className="col-md-4 ms-3">
        <h5  className="newArrivalText  mt-5 fw-bold">New Arrival</h5>
         <div className='newArrivalShoesAndArrows'>
          <div className='newShoesWrapper'>
            <img className='jordanShoe' height={130} width={200} src={newShoes} alt="" />
          </div>
          <div className='arrowsWrapper'>
          <FontAwesomeIcon className='fa-2x text-light' icon={faChevronUp} />
          <FontAwesomeIcon className='fa-2x text-light' icon={faChevronDown} />
          </div>
         </div>
        <div id='trendyCollection' className="row mt-4">
            <p>Explore Our Curated Collection of trendy <br /> and comfortable footware for every <br /> occasion.</p>
           </div>
           <div id='shopNowBtn' className="row">
            <button id="shopnowBtn" className=" btn fw-bold">Shop Now</button>
           </div>
           <div id='numbers' className="row d-flex ms-2 mt-5">
  <div id='numberOne' className="col text-center">
    <h2 className="shoeAmount fw-bold">200+</h2>
    <p className='shoesbrand'>Shoes Brand</p>
  </div>
  <div id='numberTwo' className="col text-center">
    <h2 className="shoeAmounttwo fw-bold">10K+</h2>
    <p className='orderComplete'>Order Complete</p>
  </div>
</div>
      </div>
    </div>
    </div>
  )
}

export default PairDiscover


{/* <div  className="row mt-5">
      <div id="discoverPairSection" className="ms-4 col-md-8 ms-4 shadow text-center mb-2">
      <div className='mt-5'>
    <p className="mainHead fw-bold">Step into Style</p>
    <p id='mainHeadSub' className="mainHead fw-bold">Discover <span className="yourText">Your</span></p>
    <p  id="perfectPairText" className="mainHead fw-bold">Perfect Pair</p>
</div>
<div className="d-flex justify-content-center align-items-center">
  <img className='mt-4 me-5' height={300} src={LandingShoe} alt=""/>
</div>
      </div>
      <div id='newArrivalWhole' className="col-md-4 ms-3">
        <h5  className="newArrivalText  mt-5 fw-bold">New Arrival</h5>
         <div className='newArrivalShoesAndArrows'>
          <div className='newShoesWrapper'>
            <img className='jordanShoe' height={130} width={200} src={newShoes} alt="" />
          </div>
          <div className='arrowsWrapper'>
          <FontAwesomeIcon className='fa-2x text-light' icon={faChevronUp} />
          <FontAwesomeIcon className='fa-2x text-light' icon={faChevronDown} />
          </div>
         </div>
        <div id='trendyCollection' className="row mt-4">
            <p>Explore Our Curated Collection of trendy <br /> and comfortable footware for every <br /> occasion.</p>
           </div>
           <div id='shopNowBtn' className="row">
            <button id="shopnowBtn" className=" btn fw-bold">Shop Now</button>
           </div>
           <div id='numbers' className="row d-flex ms-2 mt-5">
  <div id='numberOne' className="col text-center">
    <h2 className="shoeAmount fw-bold">200+</h2>
    <p className='shoesbrand'>Shoes Brand</p>
  </div>
  <div id='numberTwo' className="col text-center">
    <h2 className="shoeAmounttwo fw-bold">10K+</h2>
    <p className='orderComplete'>Order Complete</p>
  </div>
</div>
      </div>
    </div>   */}