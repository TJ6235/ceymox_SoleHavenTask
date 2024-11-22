import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faXTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
  



function Footer() {
  return (
    <div>
        <div id='footerWrapper' className="row">
          <div className="col-md-1"></div>
          <div id='wholefooterText' className="col-md-10 mb-5">
            <h1 className='text-light mt-5 fw-bold'>Sole Haven</h1>
            <div className="row mt-5">
              <div id='policy' className="col-md-4">
                <h3 className='text-light fw-bold'>Terms And Conditions</h3>
                <div className="div text-light mt-2">
    <p className='footerMarginCmn'>By accessing and using our website,</p>
    <p className='footerMarginCmn' >you agree to abide by our terms and </p>
    <p className='footerMarginCmn'>conditions. Read More about our </p>
    <p className='footerMarginCmn'>policies regarding purchases, </p>
    <p className='footerMarginCmn'>Returns, and privacy.</p>
</div>
              </div>
              <div id='policy' className="col-md-4">
              <h3 className='text-light fw-bold'>Privacy Policy</h3>
                <div className="div text-light">
    <p className='footerMarginCmn'>Protecting your privacy is important</p>
    <p className='footerMarginCmn'>to us. Learn how we collect , use ,  </p>
    <p className='footerMarginCmn'>and safeguard your personal </p>
    <p className='footerMarginCmn'>information by reviewing our </p>
    <p className='footerMarginCmn'>privacy policy.</p>
</div>
              </div>
              <div id='policy' className="col-md-4">
              <h3 className='text-light fw-bold'>Company Address</h3>
                <div className="div text-light">
    <p className='footerMarginCmn'>Sole Haven , 123 shoe Street Cityville ,</p>
    <p className='footerMarginCmn'>State ,ZIP , United States </p>
    </div>
    <div className="row mt-5">
    <h3 className='text-light fw-bold'>Follow Us </h3>
    <div id='iconsfooter' className="div d-flex text-light mt-2">
    <FontAwesomeIcon className='fa-2x ' icon={faFacebook} />
    <FontAwesomeIcon className='fa-2x ms-4' icon={faXTwitter} />
    <FontAwesomeIcon className='fa-2x ms-4' icon={faInstagram} />
    </div>
    </div>
              </div>
            </div>
          </div>
          <div id='copyright' className="row mt-5 text-center text-light mb-5">
            <h5 className='fw-bold'><FontAwesomeIcon icon={faCopyright} /> 2024 Sole Haven. All Rights Reserved.</h5>
          </div>
          <div className="col-md-1"></div>
        </div>
    </div>
  )
}

export default Footer