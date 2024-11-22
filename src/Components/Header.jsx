  import React from 'react'
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
  import heartVector from '../assets/heart.png'
  import cartIcon from '../assets/cartimg.png'
  import userIcon from '../assets/userlogo.png'
  import '../App.css'
  import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


  function Header() {
    return (
      <div>
         <header>
        <nav className="navbar navbar-expand-lg mt-3">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            {/* Navbar Toggler Button */}
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Brand Name */}
            <h3 className='hiddenOverflow fw-bold'>Sole Haven</h3>

            {/* Collapsible Content */}
            <div className="collapse navbar-collapse" id="navbarNav"> 
              <div className="inputWithIcon">
                <input 
                  id='navSearchbox' 
                  className='form-control ms-4'
                  type="text" 
                  placeholder='Search' 
                />
                <FontAwesomeIcon 
                  className="glassIcon ms-4"
                  icon={faMagnifyingGlass} 
                />
              </div>
              <div id='navLinks' className='d-flex justify-content-center align-items-center'>
                <a className='navLinks ms-4 fw-bold' href="">Home</a>
                <a className='navLinks ms-4 fw-bold' href="">Shop</a>
                <a className='navLinks ms-4 fw-bold' href="">About Us</a>
                <a className='navLinks ms-4 fw-bold' href="">Contact</a>
              </div>
            </div>

            {/* Icons on the Right */}
            <div id='navIcons' className='d-flex align-items-center'>
              <img className="navImg me-2" height={35} src={heartVector} alt="" />
              <img className="navImg ms-4" height={35} src={cartIcon} alt="" />
              <img className="navImg ms-4" height={35} src={userIcon} alt="" />
            </div>
          </div>
        </nav>
      </header>
      </div>
    )
  }

  export default Header