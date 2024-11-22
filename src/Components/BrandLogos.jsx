import React from 'react'
import brandlogoone from '../assets/brandlogoone.png'
import brandlogotwo from '../assets/brandlogotwo.png'
import brandlogothree from '../assets/brandlogothree.png'
import brandlogofour from '../assets/brandlogofour.png'
import brandlogofive from '../assets/brandlogofive.png'
import '../App.css'



function BrandLogos() {
  return (
    <div>
    <div id='brandloGos' className="row mt-5">
       <div className="col-md-3 d-flex justify-content-center align-items-center">
       <img height={100} src={brandlogotwo} alt="" />
       </div>
       <div className="col-md-2 d-flex justify-content-center align-items-center ">
        <img height={100} src={brandlogoone} alt="" />
       </div>
       <div className="col-md-2 d-flex justify-content-center align-items-center">
       <img height={70} src={brandlogothree} alt="" />
       </div>
       <div className="col-md-2 d-flex justify-content-center align-items-center">
       <img height={70} src={brandlogofour} alt="" />
       </div>
       <div className="col-md-3 d-flex justify-content-center align-items-center">
       <img height={100} src={brandlogofive} alt="" />
       </div>
    </div>
  
    </div>
  )
}

export default BrandLogos