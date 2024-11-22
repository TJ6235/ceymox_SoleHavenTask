import React from 'react'
import '../App.css'

function ShoeCardsCategory() {
  return (
    <div>
<div className="row mt-5">
        <div id='secCol' className="col-md-4">
      <div style={{height:'250px',backgroundColor:'rgb(240,237,224)'}}  className="cardone card w-100 shadow">
        <div style={{height:'180px'}} className="row mt-3 ms-3">
          <h2 style={{fontSize:"45px"}} className="fw-bold">Nike</h2>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
        <button id="getToCategorytwo" className="btn">Get To Category</button>
        </div>
</div>
      </div>
      <div id='secCol' className="col-md-4">
      <div style={{height:'250px',backgroundColor:'rgb(240,237,224)'}}  className="cardtwo card w-100 shadow">
        <div style={{height:'180px'}} className="row mt-3 ms-3">
          <h2 style={{fontSize:"45px"}} className="fw-bold">Adidas</h2>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
        <button id="getToCategorytwo" className="btn">Get To Category</button>
        </div>
</div>
      </div>
      <div id='secCol' className="col-md-4">
      <div style={{height:'250px',backgroundColor:'rgb(240,237,224)'}}  className="cardthree card w-100 shadow">
        <div style={{height:'180px'}} className="row mt-3 ms-3">
          <h2 style={{fontSize:"45px"}} className="fw-bold">Converse</h2>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
        <button id="getToCategorytwo" className="btn">Get To Category</button>
        </div>
</div>
      </div>
      </div>
    </div>
  )
}

export default ShoeCardsCategory