import React from 'react'
import { Link } from 'react-router-dom';
import pageNotFound from '../assets/pagenotdound.gif'
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';


function PagenotFound() {
  return (
    <div className='bg-light'>
    <div className='pgeNotFoundWrapper' style={{width:'100%' , height:'100vh',display:'flex' , justifyContent:'center',alignItems:'center'}}>
<div className="col-md-1"></div>
<div className="col-md-10 d-flex justify-content-center align-items-center flex-column">
<img src={pageNotFound} alt="" width={'50%'} height={'250px'} />
<h1  style={{overflow:'hidden',fontSize:'60px'}} className='fw-bold'>Looks  Like You Are Lost !</h1>
<h3 className='mt-2'>The page you are looking is unavailable.</h3>
<Link to={'/'}><button  id='backToHome' className='btn mt-5 shadow  fw-bold'>Back Home <FontAwesomeIcon className='ms-2' icon={faHouse} /></button></Link>
</div>
<div className="col-md-1"></div>
{/* import { Link } from 'react-router-dom'; */}
</div>
    </div>
  )
}

export default PagenotFound