import React from 'react'
import conversered from '../assets/conversered.jpg'





function TalkShoes() {
  return (
    <div>
        <div id='talkShoeWrapper' className="row mb-5">
            <div className="col-md-6">
              <h2 className='talkShoes fw-bold ms-5'>Let's Talk Shoes</h2>
              <p className='questions ms-5'>Have questions or feedback? Reach Out</p>
              <p className='ourTeam ms-5'>to our team - we're here to help </p>
              <div id='inputrowsContact' className="row mt-4 ms-4">
                <input  className='form-control  mt-3 w-75 ms-3' type="text" name="" id="talkshoeinputField" placeholder='Enter your name ...' />
                <input  className='talkshoeinputField form-control  mt-3 w-75 ms-3' type="text" name="" id="talkshoeinputField" placeholder='Enter your email address ...' />
                <textarea  className='mt-3 w-75 ms-3 p-4' name="" id="talkshoeinputField2" placeholder='Message'></textarea>
                <button id='sendMsgBtn' className='btn shadow text-center w-75 ms-3 fw-bold mt-3'>Send Message</button>
              </div>
            </div>
            <div id='converseContactIm' className="col-md-6">
               <img className='converseContactImg'  height={572} src={conversered} alt="" />
            </div>
        </div>
    </div>
    
  )
}

export default TalkShoes