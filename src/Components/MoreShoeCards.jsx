import React from 'react'
import heartVector from '../assets/heart.png'
import '../App.css'



function MoreShoeCards() {
  return (
    <div>
        <div className="row mt-5">
        <div className="col-md-4">
  <div id='commonCardTwo' className="card shadow rounded addToChart">
    <div className="card-body" id='cardBody'> 
     <div className='Firstrow'>
      <div className='newBtnAndImg'>
     <button className="newBtn btn btn-dark rounded shadow mt-3">New</button>
     <img className='heartImage' height={20} src={heartVector} alt="" />
     </div>
     </div>
      <div className="cardSecRow row align-items-center">
        <p className="brandName ms-3">Puma</p>
        <h4 id='shoeType' className="fw-bold ms-3">Sneaker Shoes</h4>

        <div id='addCartDiv' className="row d-flex justify-content-between align-items-center">
          <div className="col-md-6">
            <h3  className="shoeRate fw-bold ms-3">$ 190,00</h3>
          </div>
          <div id='btnDiv' className="col-md-6 text-end">
            <button id="addtoCartBtn" className="btn shadow fw-bold">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div id='commonCardTwo' className="card shadow rounded addToChart">
    <div className="card-body" id='cardBody'> 
    <div className='Firstrow'>
      <div className='newBtnAndImg'>
     <button className="newBtn btn btn-dark rounded shadow mt-3">New</button>
     <img className='heartImage' height={20} src={heartVector} alt="" />
     </div>
     </div>

      <div className="cardSecRow row align-items-center">
        <p className="brandName ms-3">Adidas</p>
        <h4 id='shoeType' className="fw-bold ms-3">Sneakers GAZELLE</h4>

        <div id='addCartDiv' className="row d-flex justify-content-between align-items-center">
          <div className="col-md-6">
            <h3  className="shoeRate fw-bold ms-3">$ 160,00</h3>
          </div>
          <div id='btnDiv' className="col-md-6 text-end">
            <button id="addtoCartBtn" className="btn shadow fw-bold">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <div className="col-md-4">
  <div id='commonCardTwo' className="card shadow rounded addToChart">
    <div className="card-body" id='cardBody'> 
    <div className='Firstrow'>
      <div className='newBtnAndImg'>
     <button className="newBtn btn btn-dark rounded shadow mt-3">New</button>
     <img className='heartImage' height={20} src={heartVector} alt="" />
     </div>
     </div>

      <div className="cardSecRow row align-items-center">
        <p className="brandName ms-3">Adidas</p>
        <h4 id='shoeType' className="fw-bold ms-3">Sneakers GAZELLE</h4>

        <div id='addCartDiv' className="row d-flex justify-content-between align-items-center">
          <div className="col-md-6">
            <h3  className="shoeRate fw-bold ms-3">$ 160,00</h3>
          </div>
          <div id='btnDiv' className="col-md-6 text-end">
            <button id="addtoCartBtn" className="btn shadow fw-bold">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
      {/* more shoecards second row start */}
      <div className="row mt-4 mb-5">
      <div className="col-md-4">
  <div id='commonCardTwo' className="card shadow rounded addToChart">
    <div className="card-body" id='cardBody'> 
    <div className='Firstrow'>
      <div className='newBtnAndImg'>
     <button className="newBtn btn btn-dark rounded shadow mt-3">New</button>
     <img className='heartImage' height={20} src={heartVector} alt="" />
     </div>
     </div>

      <div className="cardSecRow row align-items-center">
        <p className="ms-3 brandName">Nike</p>
        <h4 id='shoeType' className="fw-bold ms-3">Running Shoes</h4>

        <div id='addCartDiv' className="row d-flex justify-content-between align-items-center">
          <div className="col-md-6">
            <h3  className="shoeRate fw-bold ms-3">$ 270,00</h3>
          </div>
          <div id='btnDiv' className="col-md-6 text-end">
            <button id="addtoCartBtn" className="btn shadow fw-bold">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <div className="col-md-4">
  <div id='commonCardTwo' className="card shadow rounded addToChart">
    <div className="card-body" id='cardBody'> 
    <div className='Firstrow'>
      <div className='newBtnAndImg'>
     <button className="newBtn btn btn-dark rounded shadow mt-3">New</button>
     <img className='heartImage' height={20} src={heartVector} alt="" />
     </div>
     </div>

      <div  className="cardSecRow row align-items-center">
        <p className="brandName ms-3">Nike</p>
        <h4 id='shoeType' className="fw-bold ms-3">Sneakers Shoes</h4>

        <div id='addCartDiv' className="row d-flex justify-content-between align-items-center">
          <div className="col-md-6">
            <h3  className="shoeRate fw-bold ms-3">$ 150,00</h3>
          </div>
          <div id='btnDiv' className="col-md-6 text-end">
            <button id="addtoCartBtn" className="btn shadow fw-bold">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <div className="col-md-4">
  <div id='commonCardTwo' className="card shadow rounded addToChart">
    <div className="card-body" id='cardBody'> 
    <div className='Firstrow'>
      <div className='newBtnAndImg'>
     <button className="newBtn btn btn-dark rounded shadow mt-3">New</button>
     <img className='heartImage' height={20} src={heartVector} alt="" />
     </div>
     </div>

      <div  className="cardSecRow row align-items-center">
        <p className="brandName ms-3">Converse</p>
        <h4 id='shoeType' className="fw-bold ms-3">Sneakers ONE STAR</h4>
        <div id='addCartDiv' className="row d-flex justify-content-between align-items-center">
          <div className="col-md-6">
            <h3  className="shoeRate fw-bold ms-3">$ 160,00</h3>
          </div>
          <div id='btnDiv' className="col-md-6 text-end">
            <button id="addtoCartBtn" className="btn shadow fw-bold">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default MoreShoeCards